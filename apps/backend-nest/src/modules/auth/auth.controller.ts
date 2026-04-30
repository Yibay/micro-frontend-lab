import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: { username: string; password: string }) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  register(@Body() registerDto: { username: string; password: string }) {
    return this.authService.register(registerDto);
  }

  @Get('profile')
  getProfile() {
    return this.authService.getProfile();
  }
}
