//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Actors')
export class ActorsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  name: string;

  @Column('date', { nullable: true })
  dateOfBirth: Date;
}
