import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserGender, UserRole, UserStatus } from "../../domain/entities/enums/user.enum";

@Entity('user')
export class UserOrmEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({nullable: true})
    imageProfile: string;

    @Column({type: 'enum', enum: UserRole, default: UserRole.USER})
    role: UserRole;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({nullable: true})
    phoneNumber: string;

    @Column({type: 'date'})
    dateOfBirth: Date;

    @Column({type: 'enum', enum: UserGender, nullable: true})
    gender: UserGender;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    registrationDate: Date;

    @Column({type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE})
    status: UserStatus;

    



}