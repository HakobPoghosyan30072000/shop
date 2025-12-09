import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    try {
      return await this.usersService.create(
        dto.email,
        dto.fullName,
        dto.password,
      );
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
