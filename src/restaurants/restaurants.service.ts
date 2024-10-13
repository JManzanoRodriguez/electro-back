import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './schemas/restaurant.schema';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

@Injectable()
export class RestaurantsService {
  constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<RestaurantDocument>) {}

  async create(createRestaurantDto: Restaurant): Promise<Restaurant> {
    const createdRestaurant = new this.restaurantModel(createRestaurantDto);
    return createdRestaurant.save();
  }

  async findAll(paginationQuery: PaginationQueryDto): Promise<Restaurant[]> {
    const { limit = 10, offset = 0 } = paginationQuery;
    return this.restaurantModel
      .find()
      .skip(offset)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<Restaurant> {
    return this.restaurantModel.findById(id).exec();
  }

  async update(id: string, updateRestaurantDto: Restaurant): Promise<Restaurant> {
    return this.restaurantModel.findByIdAndUpdate(id, updateRestaurantDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Restaurant> {
    return this.restaurantModel.findByIdAndRemove(id).exec();
  }
}