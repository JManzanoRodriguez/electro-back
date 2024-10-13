import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeisurePlacesController } from './leisure-places.controller';
import { LeisurePlacesService } from './leisure-places.service';
import { LeisurePlace, LeisurePlaceSchema } from './schemas/leisure-place.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: LeisurePlace.name, schema: LeisurePlaceSchema }])],
  controllers: [LeisurePlacesController],
  providers: [LeisurePlacesService],
})
export class LeisurePlacesModule {}