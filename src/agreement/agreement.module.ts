
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agreement } from './entities/agreement.entity';
import { AgreementService } from './services/agreement.services';
import { AgreementController } from './controller/agreement.controller';




@Module({
  imports: [TypeOrmModule.forFeature([Agreement])],
  controllers:[AgreementController],
  providers: [AgreementService],
  exports: [TypeOrmModule,AgreementModule],
})
export class AgreementModule {}
