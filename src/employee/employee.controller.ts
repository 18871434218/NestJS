import { Get, Controller, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../entities/employee.entity';

@Controller('emplyee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}
    
    @Get()
    root(): string {
        console.log(123);
        return this.employeeService.root();
    }
    
    @Get('findOne/:name')
    async findOne(@Param() parames): Promise<Employee> {
        console.log(parames.name);
        return this.employeeService.findOne(parames.name);
    }

    @Get('create')
    async create(): Promise<string> {
        console.log('create');
        return this.employeeService.create();
    }
    
    @Get('delete/:id')
    async delete(@Param() params) {
        console.log('delete', params.id);
        return this.employeeService.delete(params.id);
    }
    
    @Get('clear')
    async clear() {
        return this.employeeService.clear();
    }
}