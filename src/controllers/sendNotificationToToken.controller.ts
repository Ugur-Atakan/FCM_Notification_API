/* eslint-disable @typescript-eslint/no-unused-vars */
import SendNotificationToTokenService from 'src/services/sendNotificationToToken.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('SendNotificationToToken')
export class SendNotificationToTokenController {
  constructor(
    private readonly SendNotificationToTokenService: SendNotificationToTokenService,
  ) {}

  @Post()
  async SendNotificationToToken(@Body() requestBody: any): Promise<any> {
    const { token, notification } = requestBody.body;

    if (!token || !notification) {
      return { error: 'both are required. Token and Notification message' };
    }
    try {
      const response =
        await this.SendNotificationToTokenService.sendNotificationToToken(
          token,
          notification,
        );
      return { message: 'successfully', response };
    } catch (error) {
      console.error(error.message);
      return { error: error.message };
    }
  }
}
