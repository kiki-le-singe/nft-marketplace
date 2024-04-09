import { Injectable } from '@nestjs/common';
import { Creation, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CreationService {
  constructor(private prisma: PrismaService) {}

  async getCreations(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CreationWhereUniqueInput;
    where?: Prisma.CreationWhereInput;
    orderBy?: Prisma.CreationOrderByWithRelationInput;
    include?: Prisma.CreationInclude;
    select?: Prisma.CreationSelect;
  }): Promise<Creation[]> {
    const { skip, take, cursor, where, orderBy, select, include } = params;

    const queryOptions: Prisma.CreationFindManyArgs = {
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

    return this.prisma.creation.findMany(queryOptions);
  }

  async getCreation(
    creationWhereUniqueInput: Prisma.CreationWhereUniqueInput,
    params: {
      include?: Prisma.CreationInclude;
      select?: Prisma.CreationSelect;
    } = {},
  ): Promise<Creation | null> {
    const { include, select } = params;

    const queryOptions: Prisma.CreationFindUniqueArgs = {
      where: creationWhereUniqueInput,
    };

    if (select) {
      queryOptions.select = select;
    } else if (include) {
      queryOptions.include = include;
    }

    return this.prisma.creation.findUnique(queryOptions);
  }
}
