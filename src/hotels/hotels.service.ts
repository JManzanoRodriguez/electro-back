import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel, HotelDocument } from './schemas/hotel.schema';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>) {}

  async create(createHotelDto: Hotel): Promise<Hotel> {
    const createdHotel = new this.hotelModel(createHotelDto);
    return createdHotel.save();
  }

  async findAll(paginationQuery: PaginationQueryDto): Promise<Hotel[]> {
    const { limit = 10, offset = 0 } = paginationQuery;
    return this.hotelModel
      .find()
      .skip(offset)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<Hotel> {
    return this.hotelModel.findById(id).exec();
  }

  async update(id: string, updateHotelDto: Hotel): Promise<Hotel> {
    return this.hotelModel.findByIdAndUpdate(id, updateHotelDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Hotel> {
    return this.hotelModel.findByIdAndRemove(id).exec();
  }
}