/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Body } from '@nestjs/common';
import SendAllNotificationService from '../services/sendAllNotification.service';

@Controller('sendAllNotification')
export class SendAllNotificationController {
  constructor(
    private readonly SendAllNotificationService: SendAllNotificationService,
  ) {}

  @Post()
  async sendAllNotification(@Body() requestBody: any): Promise<any> {
    const { notification } = requestBody;

    if (!notification) {
      return { error: 'notification are required.' };
    }
    try {
      const response =
        await this.SendAllNotificationService.sendAllNotification(notification);
      return { message: 'All messages sent with successfully', response };
    } catch (error) {
      console.error(error.message);
      return { error: error.message };
    }
  }
}
