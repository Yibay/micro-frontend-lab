import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../../src/app.module';

describe('Users Module (e2e)', () => {
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

  describe('User Management', () => {
    it('/users/list (GET) - 获取用户列表', () => {
      return request(app.getHttpServer())
        .get('/users/list')
        .expect(200)
        .expect(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    it('/users/detail/:id (GET) - 获取用户详情', () => {
      return request(app.getHttpServer())
        .get('/users/detail/1')
        .expect(200)
        .expect(res => {
          expect(res.body).toHaveProperty('id');
          expect(res.body).toHaveProperty('name');
          expect(res.body).toHaveProperty('email');
        });
    });

    it('/users/create (POST) - 创建用户', () => {
      return request(app.getHttpServer())
        .post('/users/create')
        .send({ name: '测试用户', email: 'test@example.com' })
        .expect(201)
        .expect(res => {
          expect(res.body).toHaveProperty('id');
          expect(res.body).toHaveProperty('name');
          expect(res.body).toHaveProperty('email');
        });
    });

    it('/users/update/:id (PUT) - 更新用户', () => {
      return request(app.getHttpServer())
        .put('/users/update/1')
        .send({ name: '更新后的用户名' })
        .expect(200)
        .expect(res => {
          expect(res.body).toHaveProperty('name');
        });
    });

    it('/users/delete/:id (DELETE) - 删除用户', () => {
      return request(app.getHttpServer())
        .delete('/users/delete/999')
        .expect(200)
        .expect(res => {
          expect(res.body).toHaveProperty('message');
        });
    });
  });
});
