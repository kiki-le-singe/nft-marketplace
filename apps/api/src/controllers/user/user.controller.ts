import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers({
      include: {
        creations: {
          select: {
            title: true,
            categories: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });
  }

  @Get('/:id')
  getUseById(@Param('id') id: string) {
    return this.userService.getUser(
      { id: Number(id) },
      {
        include: {
          creations: {
            select: {
              title: true,
              categories: {
                select: {
                  title: true,
                },
              },
            },
          },
        },
      },
    );
  }

  // @Get('/:email')
  // getUseByEmail(@Param('email') email: string) {
  //   return this.userService.getUser({ email });
  // }
}
