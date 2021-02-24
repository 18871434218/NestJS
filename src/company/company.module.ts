import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './company.controller';
import { CompanySerive } from './company.service';
import { Company } from '../entities/company.entity';

@Module({
   imports: [TypeOrmModule.forFeature([Company])],
   providers: [CompanySerive],
   controllers: [CompanyController]  
})

export class CompanyModule {}