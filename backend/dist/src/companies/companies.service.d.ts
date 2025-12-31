import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class CompaniesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, data: Prisma.CompanyCreateInput): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rut: string;
    }>;
    findAll(userId: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rut: string;
    }[]>;
    findOne(userId: string, id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rut: string;
    }>;
}
