import { Token } from '../entities/token.entity';
import firebaseMessaging from '../config/firebase.config';
import { Notification } from '../types/notification.type';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class SendNotificationToTokenService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}
  async sendNotificationToToken(
    token: string,
    notification: Notification,
  ): Promise<string> {
    try {
      const message = {
        notification: {
          title: notification.title || 'Notification Title is empyt',
          body: notification.body || 'Notification Body is empyt',
        },
        token,
      };
      const response = await firebaseMessaging.send({
        ...message,
        webpush: {
          notification: {
            icon: 'https://www.google.com/favicon.ico',
            title: 'Notification Title',
            body: 'Notification Body',
          },
        },
      });
      return response;
    } catch (error: any) {
      throw new Error(error?.message || `Internal server error!`);
    }
  }
}
