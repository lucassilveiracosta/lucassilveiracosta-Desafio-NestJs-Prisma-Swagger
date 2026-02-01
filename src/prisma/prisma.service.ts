import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // 1. Cria o pool de conexões usando o driver nativo 'pg'
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    
    // 2. Cria o adaptador do Prisma para esse pool
    const adapter = new PrismaPg(pool);

    // 3. Passa o adaptador para o construtor do PrismaClient
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  // É boa prática fechar a conexão ao destruir o módulo
  async onModuleDestroy() {
    await this.$disconnect();
  }
}