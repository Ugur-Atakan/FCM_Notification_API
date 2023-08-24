import { TokenService } from 'src/services/tokens.service';

import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Get,
} from '@nestjs/common';

@Controller('tokens')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('addnew')
  async createToken(@Body('token') token: string): Promise<any> {
    try {
      const newToken = await this.tokenService.createToken(token);
      return { message: 'Token added successfully', token: newToken };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  @Get('getall')
  async getTokens(): Promise<any> {
    try {
      const tokens = await this.tokenService.getTokens();
      return { message: 'Tokens fetched successfully', tokens };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
