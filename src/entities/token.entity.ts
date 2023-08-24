import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Token')
export class Token {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  token: string;
}
