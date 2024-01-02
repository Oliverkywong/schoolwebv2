import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get(':id')
  findByUserID(@Param('id') id: string) {
    return this.bookService.findByUserID(id);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get()
  getBysearch(@Query() query: {name:string, author:string} ) {
    if(query.name == undefined){
      return this.bookService.findByAuthor(query.author);
    }else{
      return this.bookService.findByName(query.name);
    }
  }
  
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
