import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from '../entities/token.entity';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}

  async createToken(token: string): Promise<Token> {
    const existingToken = await this.tokenRepository.findOne({
      where: { token },
    });

    if (existingToken) {
      throw new NotFoundException('Token already exists');
    }

    const newToken = this.tokenRepository.create({ token });
    return this.tokenRepository.save(newToken);
  }
  async getTokens(): Promise<Token[]> {
    const tokens = this.tokenRepository.find();
    return tokens;
  }
}
