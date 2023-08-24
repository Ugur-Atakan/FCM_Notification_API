import { InjectRepository } from '@nestjs/typeorm';
import firebaseMessaging from '../config/firebase.config';
import { Injectable } from '@nestjs/common';
import { Token } from '../entities/token.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class SendNotificationToTopicService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}
  async sendNotificationToTopic(
    topic: string,
    notification: Notification,
  ): Promise<string> {
    try {
      const message = {
        notification: {
          title: notification.title || 'Notification Title',
          body: notification.body || 'Notification Body',
        },
        topic,
      };
      const response = await firebaseMessaging.send(message);
      return response;
    } catch (error: any) {
      throw new Error(error?.message || `Internal server error!`);
    }
  }
}
