import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import unSubscribeToTopicService from '../services/unSubscribeToTopic.service';
import { unSubscribeToTopicController } from 'src/controllers/unSubscribeToTopic.controller';
import { Token } from '../entities/token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  controllers: [unSubscribeToTopicController],
  providers: [unSubscribeToTopicService],
  exports: [unSubscribeToTopicService],
})
export class unSubscribeToTopicModule {}
