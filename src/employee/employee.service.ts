import { Injectable } from '@nestjs/common';
import { Employee } from '../entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../entities/company.entity';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>) {}

    root(): string {
        return 'Hello World';
    }

    async create(): Promise<string> {
        let employee = new Employee();
        let company = new Company();
        company.name = 'asc';
        employee.name = 'novak';
        employee.age = 20;
        employee.address = 'shanghai';
        employee.company = company;
        
        return this.employeeRepository.save(employee)
            .then(res => {
                return 'create emplyee ... done'
            })
            .catch(err => {
                return err
            });
    }

    async findOne(name: string): Promise<Employee> {
        return await this.employeeRepository.findOne({ name: name });
    }

    async delete(id: number) {
        return await this.employeeRepository.delete({ id: id });
    }

    async clear() {
        let allData = await this.employeeRepository.find();
        console.log('1', allData);
        return await this.employeeRepository.remove(allData);
        // return await this.employeeRepository.clear();
    }
}