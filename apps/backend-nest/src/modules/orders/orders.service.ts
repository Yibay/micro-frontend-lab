import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [
    { id: 1, userId: 1, items: ['商品 A', '商品 B'], status: 'pending' },
    { id: 2, userId: 2, items: ['商品 C'], status: 'completed' },
  ];

  create(createOrderDto: { userId: number; items: string[] }) {
    const newOrder = {
      id: this.orders.length + 1,
      ...createOrderDto,
      status: 'pending',
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    return this.orders.find(order => order.id === id) || null;
  }
}
