import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from 'src/controllers/app/app.controller';
import { UserModule } from '../user/user.module';
import { CategoryModule } from '../category/category.module';
import { AppService } from 'src/services/app/app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../..', 'client'),
      serveStaticOptions: { index: false },
      exclude: ['/api/(.*)'],
    }),
    UserModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
