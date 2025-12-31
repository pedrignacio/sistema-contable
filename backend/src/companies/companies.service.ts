import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, data: Prisma.CompanyCreateInput) {
    return this.prisma.$transaction(async (tx) => {
      const company = await tx.company.create({
        data,
      });

      await tx.userCompany.create({
        data: {
          userId,
          companyId: company.id,
          role: 'admin', // Default role for creator
        },
      });

      return company;
    });
  }

  async findAll(userId: string) {
    return this.prisma.company.findMany({
      where: {
        users: {
          some: {
            userId,
          },
        },
      },
    });
  }

  async findOne(userId: string, id: string) {
    const company = await this.prisma.company.findFirst({
      where: {
        id,
        users: {
          some: {
            userId,
          },
        },
      },
    });

    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found or access denied`);
    }

    return company;
  }
}
