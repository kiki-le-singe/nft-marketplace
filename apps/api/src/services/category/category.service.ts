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
    select?: Prisma.CategorySelect;
  }): Promise<Category[]> {
    const { skip, take, cursor, where, orderBy, include, select } = params;

    const queryOptions: Prisma.CategoryFindManyArgs = {
      skip,
      take,
      cursor,
      where,
      orderBy,
    };

    if (select) {
      queryOptions.select = select;
    } else if (include) {
      queryOptions.include = include;
    }

    return this.prisma.category.findMany(queryOptions);
  }

  async getCategory(
    categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput,
    params: {
      include?: Prisma.CategoryInclude;
      select?: Prisma.CategorySelect;
    } = {},
  ): Promise<Category | null> {
    const { include, select } = params;

    const queryOptions: Prisma.CategoryFindUniqueArgs = {
      where: categoryWhereUniqueInput,
    };

    if (select) {
      queryOptions.select = select;
    } else if (include) {
      queryOptions.include = include;
    }

    return this.prisma.category.findUnique(queryOptions);
  }
}
