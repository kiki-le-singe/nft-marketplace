import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from 'src/services/category/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories() {
    return this.categoryService.getCategories({});
  }

  @Get('trending')
  getTrendingCateogry() {
    return this.categoryService.getCategories({
      take: 3,
      select: {
        id: true,
        title: true,
        creations: {
          take: 3,
          select: {
            id: true,
            title: true,
            image: true,
          },
        },
      },
    });
  }

  @Get('/:id')
  getCategoryById(@Param('id') id: string) {
    return this.categoryService.getCategory(
      { id: Number(id) },
      {
        include: {
          creations: {
            select: {
              id: true,
              title: true,
              image: true,
              creator: {
                select: {
                  name: true,
                  avatar: true,
                },
              },
            },
          },
        },
      },
    );
  }
}
