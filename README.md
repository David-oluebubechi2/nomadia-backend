# Nomadia Backend

NestJS + Prisma + PostgreSQL API for the Nomadia travel app.

## Prerequisites
- Node.js 20+
- PostgreSQL running locally (service name `postgresql-x64-18` should be **Running**)

## 1. Configure environment
Copy `.env.example` to `.env` and set:
- `DATABASE_URL` — your real Postgres credentials, with a database named `nomadia`
- `JWT_SECRET` — a strong random secret
- `CORS_ORIGINS` — the frontend origin (default `http://localhost:5173`)

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/nomadia"
PORT=3001
JWT_SECRET="a_long_random_secret"
CORS_ORIGINS="http://localhost:5173"
```

## 2. Create the database + tables
```bash
# Create the `nomadia` database (run once)
psql -U postgres -h localhost -c "CREATE DATABASE nomadia;"

# Push the Prisma schema to the DB (or use `npm run prisma:migrate`)
npx prisma db push

# Seed sample destinations, hotels & tours
npm run prisma:seed
```

## 3. Start the API
```bash
npm run start:dev
```
Runs on `http://localhost:3001` with all routes under `/api`.

## Scripts
| Script | Description |
| ------ | ----------- |
| `npm run start:dev` | Start dev server with watch |
| `npm run build` | Compile to `dist/` |
| `npm run prisma:generate` | Generate Prisma client |
| `npm run prisma:migrate` | Create & run a migration |
| `npm run prisma:push` | Push schema without migration |
| `npm run prisma:studio` | Open Prisma Studio |
| `npm run prisma:seed` | Seed sample data |

## API Overview
- `GET /api/health` — health check
- `POST /api/auth/register` — register (name, email, password)
- `POST /api/auth/login` — login (email, password)
- `POST /api/auth/google` — sign in with Google
- `GET /api/auth/profile` — current user (JWT)
- `GET /api/destinations` / `GET /api/hotels` / `GET /api/tours` — public catalogs
- `GET/POST /api/bookings`, `GET/PATCH/DELETE /api/bookings/:id` — bookings (JWT required)
