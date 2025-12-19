import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Get,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

interface RequestWithHeaders {
  headers: {
    authorization?: string;
  };
}

interface ErrorWithMessage {
  message?: string;
}

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
    } catch (error: unknown) {
      throw new BadRequestException(error);
    }
  }

  @Get('me')
  // @UseGuards(AuthGuard('jwt'))
  async getMe(@Request() req: RequestWithHeaders) {
    try {
      const token: string = (req.headers.authorization as string) || '';
      if (!token) {
        throw new BadRequestException('No token provided');
      }
      return await this.usersService.findUserByToken(token);
    } catch (error: unknown) {
      const errorMessage =
        (error as ErrorWithMessage).message || 'Failed to get user profile';
      throw new BadRequestException(errorMessage);
    }
  }
}
