import { Controller, Get, Param } from '@nestjs/common';
import { CreationService } from 'src/services/creation/creation.service';

@Controller('creations')
export class CreationController {
  constructor(private readonly creationService: CreationService) {}

  @Get()
  getCreations() {
    return this.creationService.getCreations({});
  }

  @Get('explore')
  getExploreCreations() {
    return this.creationService.getCreations({
      where: {
        id: {
          in: [1, 2, 3],
        },
        published: true,
      },
      include: {
        creator: true,
      },
      select: {
        id: true,
        title: true,
        image: true,
        creatorId: true,
        creator: {
          select: {
            name: true,
            avatar: true,
          },
        },
        // creator: true, // get all fields
      },
    });
  }

  @Get('trending')
  getTrendingCreations() {
    return this.creationService.getCreations({
      take: 3,
      where: {
        published: true,
      },
      select: {
        id: true,
        title: true,
        image: true,
      },
    });
  }

  @Get('/:id')
  getCreationById(@Param('id') id: string) {
    return this.creationService.getCreation({ id: Number(id) });
  }
}
