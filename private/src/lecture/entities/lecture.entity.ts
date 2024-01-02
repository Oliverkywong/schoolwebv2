import { Teacher } from "../../user/entities/teacher.entity";
import { Student } from "../../user/entities/student.entity";
import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, ManyToMany } from "typeorm";

@Entity()
export class Lecture {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ unique: true })
    lecture_id: string;
  
    @Column()
    name: string;

    @Column()
    start_time: string;

    @Column()
    end_time: string;

    @Column()
    sem: string;
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(
      () => Student,
      student => student.lectures
    )
    students?: Student[];

    @ManyToMany(
        () => Teacher,
        teacher => teacher.lectures
      )
      teachers?: Teacher[];
}

