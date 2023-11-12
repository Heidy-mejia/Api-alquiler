import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, Patch } from '@nestjs/common';
import { AgreementService } from '../services/agreement.services';
import { Agreement } from '../entities/agreement.entity';
import { CreateAgreementDto } from '../dto/agreement.dto';




@Controller('agreement')
export class AgreementController {
  constructor(private readonly agreementService: AgreementService) {}

  @Post()
  async create(@Body() createAgreementDto: CreateAgreementDto): Promise<Agreement> {
    return this.agreementService.create(createAgreementDto);
  }

  @Get()
  async findAll(): Promise<Agreement[]> {
    return this.agreementService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.agreementService.findOne(id);
    
  }

  @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()CreateAgreementDto :CreateAgreementDto,
        
    )
    {
        return this.agreementService.update(id, CreateAgreementDto)
    }
}

 

