import * as bcrypt from 'bcrypt';

export class PasswordService {
    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }
    async comparePassword(attemptedPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(attemptedPassword, hashedPassword);
    }
}