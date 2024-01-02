import { Book } from '../../book/entities/book.entity';
import { Lecture } from '../../lecture/entities/lecture.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  teacher_id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @OneToMany(() => Book, (book) => book.teacher)
  books: Book[]

  @ManyToMany(
    () => Lecture,
    lecture => lecture.teachers)
  @JoinTable({
    name: 'teacher_lecture',
    joinColumn: {
      name: 'teacher_id',
      referencedColumnName: 'teacher_id',
    },
    inverseJoinColumn: {
      name: 'lecture_id',
      referencedColumnName: 'lecture_id',
    },
  })
  lectures?: Lecture[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
