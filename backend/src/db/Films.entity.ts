//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Films')
export class FilmsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  title: string;

  @Column('date', { nullable: true })
  releaseDate: Date;

  @Column('integer', { nullable: true })
  director: number;

  @Column('integer', { nullable: true })
  actors: number;

  @Column('text', { nullable: true })
  genre: string;

  @Column('text', { nullable: true })
  description: string;
}
