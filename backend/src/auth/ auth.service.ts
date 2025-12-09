import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { User } from 'src/users/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { ILoginResponse, IUser } from 'src/common/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async register(dto: RegisterDto): Promise<Partial<User>> {
    const existing = await this.usersService.findByEmail(dto.email);

    if (existing) throw new BadRequestException('Email already exists');

    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.usersService.create(
      dto.email,
      dto.fullName,
      hashed,
    );
    return { id: user.id, email: user.email, fullName: user.fullName };
  }

  async login(dto: LoginDto): Promise<ILoginResponse> {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const isValid = await bcrypt.compare(dto.password, user.password);
    if (!isValid) {
      throw new BadRequestException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    const access_token = await this.jwtService.signAsync(payload);
    const userData: IUser = {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
    };

    return {
      access_token,
      user: userData,
    };
  }
}
