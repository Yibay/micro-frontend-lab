import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../../src/app.module';

describe('Orders Module (e2e)', () => {
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

  describe('Order Management', () => {
    it('/orders/list (GET) - 获取订单列表', () => {
      return request(app.getHttpServer())
        .get('/orders/list')
        .expect(200)
        .expect(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    it('/orders/detail/:id (GET) - 获取订单详情', () => {
      return request(app.getHttpServer())
        .get('/orders/detail/1')
        .expect(200)
        .expect(res => {
          expect(res.body).toHaveProperty('id');
          expect(res.body).toHaveProperty('userId');
          expect(res.body).toHaveProperty('items');
          expect(res.body).toHaveProperty('status');
        });
    });

    it('/orders/create (POST) - 创建订单', () => {
      return request(app.getHttpServer())
        .post('/orders/create')
        .send({ userId: 1, items: ['商品A', '商品B'] })
        .expect(201)
        .expect(res => {
          expect(res.body).toHaveProperty('id');
          expect(res.body).toHaveProperty('userId');
          expect(res.body).toHaveProperty('items');
          expect(res.body).toHaveProperty('status');
        });
    });
  });
});
