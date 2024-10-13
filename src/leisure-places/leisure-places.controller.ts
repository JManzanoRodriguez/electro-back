import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { LeisurePlacesService } from './leisure-places.service';
import { LeisurePlace } from './schemas/leisure-place.schema';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

@Controller('leisure-places')
export class LeisurePlacesController {
  constructor(private readonly leisurePlacesService: LeisurePlacesService) {}

  @Post()
  async create(@Body() createLeisurePlaceDto: LeisurePlace): Promise<LeisurePlace> {
    return this.leisurePlacesService.create(createLeisurePlaceDto);
  }

  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto): Promise<LeisurePlace[]> {
    return this.leisurePlacesService.findAll(paginationQuery);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<LeisurePlace> {
    return this.leisurePlacesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLeisurePlaceDto: LeisurePlace): Promise<LeisurePlace> {
    return this.leisurePlacesService.update(id, updateLeisurePlaceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<LeisurePlace> {
    return this.leisurePlacesService.remove(id);
  }
}