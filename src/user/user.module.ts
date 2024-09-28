import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { UserMiddleware } from './middleware/user/user.middleware';
import { User2Middleware } from './middleware/user2/user2.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes(UserController)
      .apply(User2Middleware)
      .forRoutes(UserController)
  }
}
