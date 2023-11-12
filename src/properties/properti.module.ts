
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/properti.entity';
import { PropertiesService } from './services/properti.services';
import { PropertiesController } from './controller/properti.controller';
import { PropertiesImage } from './entities/properties-image.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Property,PropertiesImage])],
  controllers:[PropertiesController],
  providers: [PropertiesService],
  exports: [TypeOrmModule,PropertiesModule],
})
export class PropertiesModule {}
