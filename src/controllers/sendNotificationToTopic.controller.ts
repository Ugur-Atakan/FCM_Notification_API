/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Body } from '@nestjs/common';
import SendNotificationToTopicService from '../services/sendNotificationToTopic.service';

@Controller('SendNotificationToTopic')
export class SendNotificationToTopicController {
  constructor(
    private readonly SendNotificationToTopicService: SendNotificationToTopicService,
  ) {}

  @Post()
  async sendNotificationToTopic(@Body() requestBody: any): Promise<any> {
    const { topic, notification } = requestBody;

    if (!topic || !notification) {
      return { error: 'notification and topic are required.' };
    }
    try {
      const response =
        await this.SendNotificationToTopicService.sendNotificationToTopic(
          topic,
          notification,
        );
      return { message: 'successfully sent', response };
    } catch (error) {
      console.error(error.message);
      return { error: error.message };
    }
  }
}
