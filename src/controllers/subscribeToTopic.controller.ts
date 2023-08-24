import SubscribeToTopicService from '../services/subscribeToTopic.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('subscribeToTopics')
export class SubscribeToTopicController {
  constructor(
    private readonly subscribeToTopicService: SubscribeToTopicService,
  ) {}

  @Post()
  async subscribeToTopic(@Body() requestBody: any): Promise<any> {
    const { token, topic } = requestBody;

    if (!token || !topic) {
      return { error: 'Both token and topic are required.' };
    }

    try {
      const response = await this.subscribeToTopicService.subscribeToTopic(
        token,
        topic,
      );
      return { message: 'Subscribed to topic successfully', response };
    } catch (error) {
      console.error(error.message);
      return { error: error.message };
    }
  }
}
