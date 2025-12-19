import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './ auth.service';
import { AuthGuard } from '@nestjs/passport';

interface AuthenticatedRequest {
  user: {
    userId: string;
    email: string;
    fullName: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return await this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    console.log(dto);

    return await this.authService.login(dto);
  }

  @Get('verify')
  @UseGuards(AuthGuard('jwt'))
  verify(@Request() req: AuthenticatedRequest) {
    console.log(req);

    return { user: req.user, message: 'Token is valid' };
  }
}
