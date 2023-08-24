import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import SendAllNotificationService from '../services/sendAllNotification.service';
import { SendAllNotificationController } from '../controllers/sendAllNotification.controller';
import { Token } from '../entities/token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  controllers: [SendAllNotificationController],
  providers: [SendAllNotificationService],
  exports: [SendAllNotificationService],
})
export class SendAllNotificationModule {}
