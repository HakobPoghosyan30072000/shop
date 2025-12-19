import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

interface ErrorWithMessage {
  message?: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async create(
    email: string,
    fullName: string,
    password: string,
  ): Promise<User> {
    const user = this.usersRepository.create({ email, fullName, password });
    return await this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      return await this.usersRepository.findOne({ where: { email } });
    } catch (error: unknown) {
      const errorMessage =
        (error as ErrorWithMessage).message || 'Failed to get user profile';
      throw new BadRequestException(errorMessage);
    }
  }

  async findUserByToken(token: string): Promise<User | null> {
    try {
      // Remove 'Bearer ' prefix if present
      const cleanToken = token.replace('Bearer ', '');

      // Decode the token to get payload
      const decodedToken: unknown = this.jwtService.decode(cleanToken);

      if (!decodedToken || typeof decodedToken !== 'object') {
        throw new Error('Invalid token payload');
      }

      const payload = decodedToken as { sub?: string };

      if (!payload.sub) {
        throw new Error('Invalid token payload');
      }

      return await this.usersRepository.findOne({
        where: { id: Number(payload.sub) },
      });
    } catch (error: unknown) {
      const errorMessage =
        (error as ErrorWithMessage).message || 'Failed to get user profile';
      throw new BadRequestException(errorMessage);
    }
  }
}
