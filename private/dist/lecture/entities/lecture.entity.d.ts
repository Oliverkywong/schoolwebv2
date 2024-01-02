import { Teacher } from "../../user/entities/teacher.entity";
import { Student } from "../../user/entities/student.entity";
export declare class Lecture {
    id: number;
    lecture_id: string;
    name: string;
    start_time: string;
    end_time: string;
    sem: string;
    created_at: Date;
    updated_at: Date;
    students?: Student[];
    teachers?: Teacher[];
}
