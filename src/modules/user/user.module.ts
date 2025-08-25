import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/models/user.entity';
import { UserExistsMiddleware } from 'src/common/middleware/user-exists.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {

    consumer
      .apply(UserExistsMiddleware)
      .exclude({ path: 'v1/user', method: RequestMethod.GET })
      .exclude({ path: 'v1/user', method: RequestMethod.POST })

      .forRoutes(UserController)
  }
}
