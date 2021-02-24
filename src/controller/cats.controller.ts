import { Body, Controller, Get, HttpException, HttpStatus, Post, UsePipes } from "@nestjs/common";
import { CreateCatDto } from "src/Class/creat-cat";
import { CatsService } from "src/service/cats.service";
import { JoiValidationPipe } from "src/service/ValidationPipeService";
import { RoadLine, ListAllEntities, UpdateCatDto } from '../Class/roadLine';
import { ForbiddenException } from '../Exception/Forbidden'

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
    
    // @Post()
    // @UsePipes(new JoiValidationPipe(createCatSchema))
    // async create(@Body() creatCatDto: CreateCatDto) {
    //     console.log('received:', creatCatDto);
    //     this.catsService.create(creatCatDto);
    // }

    @Get()
    async findAll() {
        return this.catsService.findAll();
    }

    @Get('async')
    async find() {
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        throw new HttpException({status: HttpStatus.FORBIDDEN, error: 'This is a custom message'}, HttpStatus.FORBIDDEN);  
    }

    @Get('Forbborn')
    async findsy() {
       throw new ForbiddenException();
    }
    // @Post() 
    // create(@Body() roadLine: RoadLine) {
    //     console.log('receoved parames', roadLine);
    //     return 'This action adds a new Cat';
    // }

    // @Get()
    // findAll(@Query() query: ListAllEntities) {
    //     return `This action returns all cats (limit: ${query.limit} items)`;
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return `This action returns a #${id} cat`;
    // }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    //     return `This action updates a #${id} cat`;
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return `This action removes a #${id} cat`;
    // }
}