import { Injectable } from '@nestjs/common';
import { Company } from '../entities/company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class CompanySerive {
    constructor(@InjectRepository(Company)
    private readonly companyRepository: Repository<Company>) {}

    async insert() {
        let company = new Company();
        company.name = 'wd';
        
        let employContent = [];
        for (let i = 0; i < 3; i++) {
           let employee = new Employee();
           employee.name = 'asc' + i;
           employee.age = 20 + i;
           employee.address = 'beijing' + i;
           employContent.push(employee); 
        }

        company.employees = employContent;

        return this.companyRepository.save(company)
    }

    async find(name: string) {
        return await this.companyRepository.find({ name: name});
    }

    async delete(id: number) {
        return await this.companyRepository.delete({ id: id });
    }

    async clear() {
        let allData = await this.companyRepository.find();
        console.log('1', allData);
        return await this.companyRepository.remove(allData);
    }
}