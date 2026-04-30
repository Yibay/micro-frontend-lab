import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../../src/app.module';

describe('Auth Module (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('Authentication', () => {
    it('/auth/login (POST) - 用户登录', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .send({ username: 'test', password: '123456' })
        .expect(201)
        .expect(res => {
          expect(res.body).toHaveProperty('message');
          expect(res.body).toHaveProperty('token');
          expect(res.body).toHaveProperty('user');
        });
    });

    it('/auth/register (POST) - 用户注册', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .send({ username: 'newuser', password: '123456' })
        .expect(201)
        .expect(res => {
          expect(res.body).toHaveProperty('message');
          expect(res.body).toHaveProperty('user');
        });
    });

    it('/auth/profile (GET) - 获取用户信息', () => {
      return request(app.getHttpServer())
        .get('/auth/profile')
        .expect(200)
        .expect(res => {
          expect(res.body).toHaveProperty('id');
          expect(res.body).toHaveProperty('username');
          expect(res.body).toHaveProperty('email');
        });
    });
  });
});
