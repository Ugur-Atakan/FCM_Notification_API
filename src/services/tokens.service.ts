import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from '../entities/token.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}
  async addToken(token: string): Promise<any> {
    const tokenCheck = this.tokenRepository.findOne({
      where: { token: token },
    });
    if (tokenCheck) {
      throw new NotFoundException('Token Zaten Var');
    }
    const newToken = this.tokenRepository.create({ token });
    console.log('Token eklendi');
    return this.tokenRepository.save(newToken);
  }
  async removeToken(token: string): Promise<any> {
    this.tokenRepository.delete({ token });
  }
}
