const { PrismaClient, Role } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Available Roles:', Role);
  const password = await bcrypt.hash('123456', 10);

  // 1. Admin (Esteban Bustos)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@demo.cl' },
    update: {},
    create: {
      email: 'admin@demo.cl',
      password,
      firstName: 'Esteban',
      lastName: 'Bustos',
      role: Role.ADMIN,
    },
  });

  // 2. Contador
  const contador = await prisma.user.upsert({
    where: { email: 'contador@demo.cl' },
    update: {},
    create: {
      email: 'contador@demo.cl',
      password,
      firstName: 'Ana',
      lastName: 'Contadora',
      role: Role.CONTADOR,
    },
  });

  // 3. Cliente
  const cliente = await prisma.user.upsert({
    where: { email: 'cliente@demo.cl' },
    update: {},
    create: {
      email: 'cliente@demo.cl',
      password,
      firstName: 'Carlos',
      lastName: 'Cliente',
      role: Role.CLIENTE,
    },
  });

  // 4. Empresa Demo
  const empresa = await prisma.company.upsert({
    where: { rut: '76.111.222-3' },
    update: {},
    create: {
      name: 'Empresa Demo SpA',
      rut: '76.111.222-3',
    },
  });

  console.log({ admin, contador, cliente, empresa });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
