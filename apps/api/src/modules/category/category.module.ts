import { Module } from '@nestjs/common';
import { CategoryController } from 'src/controllers/category/category.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CategoryService } from 'src/services/category/category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService],
})
export class CategoryModule {}
