import { Module } from '@nestjs/common';
import { CreationController } from 'src/controllers/creation/creation.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreationService } from 'src/services/creation/creation.service';

@Module({
  controllers: [CreationController],
  providers: [CreationService, PrismaService],
})
export class CreationModule {}
