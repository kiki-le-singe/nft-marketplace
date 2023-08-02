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
    // select?: Prisma.UserSelect;
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

  get() {
    return { id: 'kj86sdfhk6sdh', name: 'Foo', country: 'Italy' };
  }

  getUser(param: { userId: number }) {
    return {
      id: param.userId,
      name: 'Foo',
      country: 'Argentina',
    };
    // return param;
  }
}
