import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendNotificationToTokenController } from 'src/controllers/sendNotificationToToken.controller';
import { Token } from '../entities/token.entity';
import SendNotificationToTokenService from '../services/sendNotificationToToken.service';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  controllers: [SendNotificationToTokenController],
  providers: [SendNotificationToTokenService],
  exports: [SendNotificationToTokenService],
})
export class SendNotificationToTokenModule {}
