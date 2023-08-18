import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [PrismaService],
  //vamos exportar o nosso prismaService
  exports:[PrismaService]
})
export class CommonModule {}
