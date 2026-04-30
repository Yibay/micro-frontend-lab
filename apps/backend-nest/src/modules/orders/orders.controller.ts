import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('create')
  create(@Body() createOrderDto: { userId: number; items: string[] }) {
    return this.ordersService.create(createOrderDto);
  }

  @Get('list')
  findAll() {
    return this.ordersService.findAll();
  }

  @Get('detail/:id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }
}
