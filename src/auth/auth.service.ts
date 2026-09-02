import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';

type RegisterDto = {
  name: string;
  email: string;
  password: string;
};

type GoogleLoginDto = {
  email: string;
  name: string;
  image?: string;
  googleId: string;
};

type LoginResponse = {
  user: { id: string; name: string; email: string; image?: string };
  token: string;
};

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async register(dto: RegisterDto): Promise<LoginResponse> {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new UnauthorizedException('An account with this email already exists.');
    }

    const bcrypt = await import('bcryptjs');
    const passwordHash = await bcrypt.hash(dto.password, 12);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        passwordHash,
      },
    });

    return this.issueToken(user);
  }

  async login(email: string, password: string): Promise<LoginResponse> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user?.passwordHash) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    const bcrypt = await import('bcryptjs');
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    return this.issueToken(user);
  }

  async googleLogin(dto: GoogleLoginDto): Promise<LoginResponse> {
    let user = await this.prisma.user.findUnique({
      where: { googleId: dto.googleId },
    });

    if (!user) {
      user = await this.prisma.user.upsert({
        where: { email: dto.email },
        update: { googleId: dto.googleId, image: dto.image },
        create: {
          email: dto.email,
          name: dto.name,
          googleId: dto.googleId,
          image: dto.image,
        },
      });
    }

    return this.issueToken(user);
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException();
    }
    return { id: user.id, name: user.name, email: user.email, image: user.image };
  }

  private async issueToken(user: { id: string; name: string; email: string; image?: string | null }): Promise<LoginResponse> {
    const payload = { sub: user.id, email: user.email };
    const token = await this.jwt.signAsync(payload);
    return {
      user: { id: user.id, name: user.name, email: user.email, image: user.image ?? undefined },
      token,
    };
  }
}