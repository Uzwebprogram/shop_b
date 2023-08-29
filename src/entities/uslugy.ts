import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";


@Entity({ name: "uslugy" })
export class UslugyEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ type: "varchar", length: 1000 })
    @IsString()
    image: string
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;
}