import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';
import { Employee } from './employee.entity'

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string
    
    @OneToMany(type => Employee, employee => employee.company, { cascade: true, eager: true })
    @JoinTable()
    employees: Employee[]
}
