import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { Hotel } from './schemas/hotel.schema';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Post()
  async create(@Body() createHotelDto: Hotel): Promise<Hotel> {
    return this.hotelsService.create(createHotelDto);
  }

  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto): Promise<Hotel[]> {
    return this.hotelsService.findAll(paginationQuery);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Hotel> {
    return this.hotelsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHotelDto: Hotel): Promise<Hotel> {
    return this.hotelsService.update(id, updateHotelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Hotel> {
    return this.hotelsService.remove(id);
  }
}