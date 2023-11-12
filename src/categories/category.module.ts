
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoryService } from './services/category.services';
import { categoryController } from './controller/category.controller';



@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers:[categoryController],
  providers: [CategoryService],
  exports: [TypeOrmModule,CategorytModule],
})
export class CategorytModule {}
