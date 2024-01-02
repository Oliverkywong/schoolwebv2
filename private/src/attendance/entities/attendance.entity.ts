import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, ManyToOne, OneToOne, ManyToMany, OneToMany } from "typeorm";

@Entity()
export class Attendance {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    student_id: String;

    @Column()
    lecture_id: String;

    @Column()
    attendance: boolean;
}


