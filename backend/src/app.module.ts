import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'hakobpoghosyan', // your role name
      password: 'new_password',
      database: 'myapp',
      autoLoadEntities: true,
      synchronize: true, // ❗ Turn off in production
    }),
    AuthModule,
  ],
})
export class AppModule {}
