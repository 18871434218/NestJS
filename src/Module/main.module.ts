import { Module, Global } from '@nestjs/common';
import { EmployeeModule } from 'src/employee/employee.module';
import { CompanyModule } from 'src/company/company.module';
import { AppModule } from '../Module/app.module';
import { CatModule } from '../Module/cat.module';
import { Redismodule } from '../redis/redis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from "path";
const entity = resolve(__dirname, '../entities/**/**.entity{.ts,.js}');
const dev = process.env.NODE_ENV === 'development';

@Global() // 全局模块---一般数据库连接
@Module({
  imports: [TypeOrmModule.forRoot({
        type: "mysql",
        host: dev ? '10.0.16.25' : '127.0.0.1',
        port: 3306,
        username: "root",
        password: "123456",
        database: "nodesql",
        entities: [entity],
        synchronize: true
  }), AppModule, CatModule, EmployeeModule, CompanyModule, Redismodule],
  exports: [AppModule, CatModule]
})
export class MainModule {}
