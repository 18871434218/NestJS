import { Get, Controller, Param } from '@nestjs/common';
import { CompanySerive } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanySerive) {}
    
    @Get()
    async insert() {
        return this.companyService.insert();
    }

    @Get('find/:name')
    async find(@Param() parames) {
        return this.companyService.find(parames.name);
    }
    
    @Get('delete/:id')
    async delete(@Param() parames) {
        return this.companyService.delete(parames.id);
    }
    
    @Get('clear')
    async clear() {
        return this.companyService.clear();
    }
}