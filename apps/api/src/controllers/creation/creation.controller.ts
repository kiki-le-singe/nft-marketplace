import { Controller, Get, Param } from '@nestjs/common';
import { CreationService } from 'src/services/creation/creation.service';

@Controller('creations')
export class CreationController {
  constructor(private readonly creationService: CreationService) {}

  @Get()
  getCreations() {
    return this.creationService.getCreations({});
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
