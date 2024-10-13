import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LeisurePlace, LeisurePlaceDocument } from './schemas/leisure-place.schema';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

@Injectable()
export class LeisurePlacesService {
  constructor(@InjectModel(LeisurePlace.name) private leisurePlaceModel: Model<LeisurePlaceDocument>) {}

  async create(createLeisurePlaceDto: LeisurePlace): Promise<LeisurePlace> {
    const createdLeisurePlace = new this.leisurePlaceModel(createLeisurePlaceDto);
    return createdLeisurePlace.save();
  }

  async findAll(paginationQuery: PaginationQueryDto): Promise<LeisurePlace[]> {
    const { limit = 10, offset = 0 } = paginationQuery;
    return this.leisurePlaceModel
      .find()
      .skip(offset)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<LeisurePlace> {
    return this.leisurePlaceModel.findById(id).exec();
  }

  async update(id: string, updateLeisurePlaceDto: LeisurePlace): Promise<LeisurePlace> {
    return this.leisurePlaceModel.findByIdAndUpdate(id, updateLeisurePlaceDto, { new: true }).exec();
  }

  async remove(id: string): Promise<LeisurePlace> {
    return this.leisurePlaceModel.findByIdAndRemove(id).exec();
  }
}