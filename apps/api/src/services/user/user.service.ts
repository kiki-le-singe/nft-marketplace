import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UserSelect } from './types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
    include?: Prisma.UserInclude;
    select?: UserSelect;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy, include } = params;

    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async getUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    params: {
      include?: Prisma.UserInclude;
      select?: UserSelect;
    } = {},
  ): Promise<User | null> {
    const { include } = params;

    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      include,
    });
  }
}
