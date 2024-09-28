import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException('No token', HttpStatus.FORBIDDEN);
    if (authorization === 'khoakhoabilly') next();
    else throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
  }
}
