import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification, NotificationResponse } from '../types/notification.type';
import { Token } from '../entities/token.entity';
import firebaseMessaging from '../config/firebase.config';

@Injectable()
export default class SendAllNotificationService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}

  async sendAllNotification(
    notification: Notification,
  ): Promise<NotificationResponse> {
    try {
      const tokens = await this.tokenRepository.find();
      const registrationTokens = tokens.map((token: Token) => token.token);

      if (registrationTokens.length === 0) {
        throw new Error('No tokens found');
      }

      const message = {
        notification: {
          title: notification.title || 'Notification Title',
          body: notification.body || 'Notification Body',
        },
        tokens: registrationTokens,
      };

      const response = await firebaseMessaging.sendMulticast(message);
      return response;
    } catch (error: any) {
      throw new Error(error?.message || `Internal server error!`);
    }
  }
}
