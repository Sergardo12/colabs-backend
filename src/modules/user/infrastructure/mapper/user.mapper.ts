import { User } from "../../domain/entities/user.entity";
import { UserOrmEntity } from "../database/user.orm-entity";

export class UserMapper {
    static toDomain(userOrm: UserOrmEntity): User{
        return new User({
            id: userOrm.id,
            email: userOrm.email,
            password: userOrm.password,
            imageProfile: userOrm.imageProfile,
            role: userOrm.role,
            name: userOrm.name,
            lastName: userOrm.lastName,
            phoneNumber: userOrm.phoneNumber,
            dateOfBirth: userOrm.dateOfBirth,
            gender: userOrm.gender,
            registrationDate: userOrm.registrationDate,
            status: userOrm.status
        })
    }

    static toOrm(user: User): UserOrmEntity{
        const userOrm = new UserOrmEntity();
        userOrm.id = user.getId();
        userOrm.email = user.email;
        userOrm.password = User.extractPasswordHash(user);
        userOrm.imageProfile = user.imageProfile;
        userOrm.role = user.role;
        userOrm.name = user.getName();
        userOrm.lastName = user.getLastName();
        userOrm.phoneNumber = user.phoneNumber;
        userOrm.dateOfBirth = user.dateOfBirth;
        userOrm.gender = user.gender;
        userOrm.registrationDate = user.registrationDate;
        userOrm.status = user.status;
        return userOrm;
    }
}