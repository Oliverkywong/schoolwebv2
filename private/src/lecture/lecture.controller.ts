import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';

@Controller('lecture')
export class LectureController {
  constructor(private readonly lectureService: LectureService) {}

  @Post()
  create(@Body() createLectureDto: CreateLectureDto) {
    return this.lectureService.create(createLectureDto);
  }

  @Get()
  findAll() {
    return this.lectureService.findAll();
  }

  @Get(':id')
  findlectureByID(@Param('id') id: string) {
    if (id.substring(0, 1) == "T") {
      return this.lectureService.findlectureTeacher(id);
    } else if (id.substring(0, 1) == "S") {
      return this.lectureService.findlectureStudent(id);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLectureDto: UpdateLectureDto) {
    return this.lectureService.update(+id, updateLectureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lectureService.remove(+id);
  }
}
