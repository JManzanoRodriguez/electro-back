import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Location, LocationSchema } from '../../shared/schemas/location.schema';
import { Rating, RatingSchema } from '../../shared/schemas/rating.schema';

export type HotelDocument = Hotel & Document;

@Schema()
export class Hotel {
  @Prop([String])
  photos: string[];

  @Prop()
  establishmentType: string;

  @Prop()
  description: string;

  @Prop()
  website: string;

  @Prop()
  contactSite?: string;

  @Prop()
  numberOfChargers: number;

  @Prop([String])
  chargerTypes: string[];

  @Prop()
  chargerInformation: string;

  @Prop({ type: RatingSchema })
  ratings: Rating;

  @Prop()
  relevantInformation?: string;

  @Prop({ type: LocationSchema })
  location: Location;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);