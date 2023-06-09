import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Wilder } from "./wilder";
import { Skill } from "./skill";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Grade {
  @Field()
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public wilderId: number;

  @Column()
  public skillId: number;

  @Field()
  @Column()
  public grade: number;

  @ManyToOne(() => Wilder, (wilder) => wilder.grades)
  public wilder: Wilder;

  @Field()
  @ManyToOne(() => Skill, (skill) => skill.grades)
  public skill: Skill;
}
