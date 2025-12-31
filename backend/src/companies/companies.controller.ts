import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateCompanyDto } from './dto/create-company.dto';

@UseGuards(JwtAuthGuard)
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Request() req, @Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(req.user.userId, createCompanyDto);
  }

  @Get()
  findAll(@Request() req) {
    return this.companiesService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.companiesService.findOne(req.user.userId, id);
  }
}
