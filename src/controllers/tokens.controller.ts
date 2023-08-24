import { TokenService } from 'src/services/tokens.service';

import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}
  @Post()
  async addToken(@Body('token') token: string): Promise<any> {
    try {
      const newToken = await this.tokenService.addToken(token);
      return { message: 'Token Added Succesfully', token: newToken };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
