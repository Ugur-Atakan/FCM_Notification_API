import { MessagingTopicManagementResponse } from 'firebase-admin/lib/messaging/messaging-api';
import firebaseMessaging from '../config/firebase.config';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from '../entities/token.entity';
import { Repository } from 'typeorm';

@Injectable()
export default class UnSubscribeToTopicService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}
  async unsubscribeFromTopic(
    token: string,
    topic: string,
  ): Promise<MessagingTopicManagementResponse> {
    try {
      const response = await firebaseMessaging.unsubscribeFromTopic(
        token,
        topic,
      );
      return response;
    } catch (error: any) {
      throw new Error(error?.message || `Internal server error!`);
    }
  }
}
