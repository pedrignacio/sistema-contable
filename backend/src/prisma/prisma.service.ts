import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const connectionString = process.env.DIRECT_URL;
    if (!connectionString) {
      throw new Error('DIRECT_URL is not defined');
    }
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super({ adapter });
  }

  async onModuleInit() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await this.$connect();
  }
}
