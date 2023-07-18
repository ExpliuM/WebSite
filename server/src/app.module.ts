import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import UsersController from './user/users.controller';
import { UsersService } from './user/users.service';
import User from './user/user.entity';
import ViewCounter from './view-counter/veiw-counter.entity';
import ViewCounterController from './view-counter/view-counter.controller';
import ViewCounterService from './view-counter/view-counter.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'explium',
      password: 'explium',
      database: 'root',
      entities: [User, ViewCounter],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([ViewCounter]),
  ],
  controllers: [AppController, UsersController, ViewCounterController],
  providers: [AppService, UsersService, ViewCounterService],
})
export class AppModule {}
