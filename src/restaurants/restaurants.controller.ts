import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './schemas/restaurant.schema';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  async create(@Body() createRestaurantDto: Restaurant): Promise<Restaurant> {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto): Promise<Restaurant[]> {
    return this.restaurantsService.findAll(paginationQuery);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRestaurantDto: Restaurant): Promise<Restaurant> {
    return this.restaurantsService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantsService.remove(id);
  }
}