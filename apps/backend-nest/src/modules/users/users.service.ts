import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: '张三', email: 'zhangsan@example.com' },
    { id: 2, name: '李四', email: 'lisi@example.com' },
  ];

  create(createUserDto: { name: string; email: string }) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id) || null;
  }

  update(id: number, updateUserDto: { name?: string; email?: string }) {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      return { message: '用户不存在' };
    }
    Object.assign(user, updateUserDto);
    return user;
  }

  remove(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      return { message: '用户不存在' };
    }
    this.users.splice(index, 1);
    return { message: '删除成功' };
  }
}
