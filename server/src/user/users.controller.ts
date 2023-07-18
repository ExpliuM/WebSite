import { Get, Controller } from '@nestjs/common';

import { User } from './user.entity';
import UsersService from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
}

export default UsersController;
