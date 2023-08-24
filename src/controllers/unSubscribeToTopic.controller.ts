/* eslint-disable @typescript-eslint/no-unused-vars */
import unSubscribeToTopicService from '../services/unSubscribeToTopic.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('unSubscribeToTopics')
export class unSubscribeToTopicController {
  constructor(
    private readonly unSubscribeToTopicService: unSubscribeToTopicService,
  ) {}

  @Post()
  async unSubscribeToTopic(@Body() requestBody: any): Promise<any> {
    const { token, topic } = requestBody;

    if (!token || !topic) {
      return { error: 'Both token and topic are required.' };
    }

    try {
      const response =
        await this.unSubscribeToTopicService.unsubscribeFromTopic(token, topic);
      return { message: 'UnSubscribed to topic successfully', response };
    } catch (error) {
      console.error(error.message);
      return { error: error.message };
    }
  }
}
