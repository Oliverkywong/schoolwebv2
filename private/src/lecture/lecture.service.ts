import { Injectable } from '@nestjs/common';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lecture } from './entities/lecture.entity';

@Injectable()
export class LectureService {
  constructor(
    @InjectRepository(Lecture)
    private readonly lectureRepository: Repository<Lecture>,
  ){}

  create(createLectureDto: CreateLectureDto) {
    const data = this.lectureRepository.create(createLectureDto);
    return this.lectureRepository.save(data);
  }

  findAll() {
    return this.lectureRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} lecture`;
  }

  findlectureStudent(id:string){
    return this.lectureRepository.find({
      relations:{ students:true},
      where: {
        students : { student_id : id}
      }
    })
  }

  findlectureTeacher(id:string){
    return this.lectureRepository.find({
      relations:{ teachers:true},
      where: {
        teachers : { teacher_id : id}
      }
    })
  }

  update(id: number, updateLectureDto: UpdateLectureDto) {
    return `This action updates a #${id} lecture`;
  }

  remove(id: number) {
    return this.lectureRepository.delete(id);
  }
}
