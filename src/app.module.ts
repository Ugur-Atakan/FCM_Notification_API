import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'; // import TypeOrmModule
import { dbConfig } from './config/db.config';
import { SendAllNotificationModule } from './modules/sendAllNotification.module';
import { SendNotificationToTokenModule } from './modules/sendNotificationToToken.module';
import { SendNotificationToTopicModule } from './modules/sendNotificationToTopic.module';
import { SubscribeToTopicModule } from './modules/subscribeToTopic.module copy';
import { unSubscribeToTopicModule } from './modules/unSubscribeToTopic.module';
import { TokenModule } from './modules/token.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
@Module({
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AppService,
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dbConfig()), // add there],
    SendAllNotificationModule,
    SendNotificationToTokenModule,
    SendNotificationToTopicModule,
    SubscribeToTopicModule,
    unSubscribeToTopicModule,
    TokenModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
