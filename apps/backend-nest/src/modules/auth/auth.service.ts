import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(loginDto: { username: string; password: string }) {
    return {
      message: '登录成功',
      token: 'jwt-token-example',
      user: {
        id: 1,
        username: loginDto.username,
      },
    };
  }

  register(registerDto: { username: string; password: string }) {
    return {
      message: '注册成功',
      user: {
        id: 1,
        username: registerDto.username,
      },
    };
  }

  getProfile() {
    return {
      id: 1,
      username: 'current-user',
      email: 'user@example.com',
    };
  }
}
