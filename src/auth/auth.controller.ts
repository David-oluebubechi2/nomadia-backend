import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto, LoginDto, GoogleLoginDto } from './dto/auth.dto.js';
import { JwtAuthGuard } from './jwt-auth.guard.js';
import { Public } from './public.decorator.js';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Public()
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password);
  }

  @Public()
  @Post('google')
  googleLogin(@Body() dto: GoogleLoginDto) {
    return this.authService.googleLogin(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: { user: { sub: string } }) {
    return this.authService.getProfile(req.user.sub);
  }
}