import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  telephone: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ unique: true, length: 90 })
  @Index()
  email: string;
}
