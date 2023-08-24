import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscribeToTopicController } from '../controllers/subscribeToTopic.controller';
import { Token } from '../entities/token.entity';
import SubscribeToTopicService from 'src/services/subscribeToTopic.service';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  controllers: [SubscribeToTopicController],
  providers: [SubscribeToTopicService],
  exports: [SubscribeToTopicService],
})
export class SubscribeToTopicModule {}
