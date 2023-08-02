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

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getUser(param);
  }
}
