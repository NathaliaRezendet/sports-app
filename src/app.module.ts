import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { ActivityModule } from './activity/activity.module';
import { Activity } from './activity/activity.entity';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'userdb',
      password: '1234',
      database: 'sports_db',
      entities: [User, Activity],
      synchronize: true,
    }),
    UsersModule,
    ActivityModule,
  ],
  providers: [LoggerMiddleware], 
})
export class AppModule {}
