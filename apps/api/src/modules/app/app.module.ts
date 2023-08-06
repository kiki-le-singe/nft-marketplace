import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/app/app.controller';
import { UserModule } from '../user/user.module';
import { CategoryModule } from '../category/category.module';
import { AppService } from 'src/services/app/app.service';

@Module({
  imports: [UserModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
