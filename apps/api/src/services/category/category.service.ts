import { Injectable } from '@nestjs/common';
import { Prisma, Category } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getCategories(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput;
    include?: Prisma.CategoryInclude;
  }): Promise<Category[]> {
    const { skip, take, cursor, where, orderBy, include } = params;

    return this.prisma.category.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async getCategory(
    categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput,
    params: {
      include?: Prisma.CategoryInclude;
      select?: Prisma.CategorySelect;
    } = {},
  ): Promise<Category | null> {
    const { include } = params;

    return this.prisma.category.findUnique({
      where: categoryWhereUniqueInput,
      include,
    });
  }
}
