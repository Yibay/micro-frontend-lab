import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() createUserDto: { name: string; email: string }) {
    return this.usersService.create(createUserDto);
  }

  @Get('list')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('detail/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: { name?: string; email?: string }) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
