import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import SendNotificationToTopicService from '../services/sendNotificationToTopic.service';
import { SendNotificationToTopicController } from 'src/controllers/sendNotificationToTopic.controller';
import { Token } from '../entities/token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  controllers: [SendNotificationToTopicController],
  providers: [SendNotificationToTopicService],
  exports: [SendNotificationToTopicService],
})
export class SendNotificationToTopicModule {}
