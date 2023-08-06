import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers({});

    // return this.userService.getUsers({
    //   include: {
    //     creations: {
    //       // include: {
    //       //   categories: {
    //       //     select: {
    //       //       title: true,
    //       //     },
    //       //   },
    //       // },
    //       select: {
    //         id: true,
    //         title: true,
    //         image: true,
    //       },
    //     },
    //   },
    // });

    // return this.userService.getUsers({
    //   // where: {
    //   //   id: 1,
    //   // },
    //   include: {
    //     creations: {
    //       include: {
    //         categories: {
    //           select: {
    //             title: true,
    //           },
    //         },
    //         // categories: true,
    //       },
    //     },
    //   },
    // });
  }

  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUser(
      { id: Number(id) },
      {
        include: {
          creations: {
            select: {
              id: true,
              title: true,
              image: true,
            },
          },
        },
      },
    );
  }

  // @Get('/:email')
  // getUserByEmail(@Param('email') email: string) {
  //   return this.userService.getUser({ email });
  // }
}
