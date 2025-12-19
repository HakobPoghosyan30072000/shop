import { createParamDecorator, ExecutionContext } from '@nestjs/common';

interface RequestWithUser {
  user?: {
    userId: string;
    email: string;
    fullName: string;
  };
  headers: {
    authorization?: string;
  };
}

export const User = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): RequestWithUser['user'] | null => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    console.log('Request user:', request.user);
    console.log('Authorization header:', request.headers.authorization);
    return request.user ?? null;
  },
);
