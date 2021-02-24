import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AppService } from '../service/app.service';
import { CreateCatDto } from '../Class/creat-cat';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('get')
  getData(): string {
    return this.appService.getData();
  }

  // @Get(':id')
  // findOne(@Param('id') id): string {
  //   return `This action returns a #${id} cat`;
  // }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get()
  findAll1(): Observable<any[]> {
    return of([]);
  }

  @Post('get/roadMap')
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('received:', createCatDto);
    return 'This action adds a new cat';
  }
}