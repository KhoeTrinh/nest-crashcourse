import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class User2Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}
