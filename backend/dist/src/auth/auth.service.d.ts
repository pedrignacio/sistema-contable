import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        user: {
            email: any;
            role: any;
            firstName: any;
            lastName: any;
        };
    }>;
    register(data: Prisma.UserCreateInput): Promise<{
        id: string;
        email: string;
        password: string;
        firstName: string | null;
        lastName: string | null;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
