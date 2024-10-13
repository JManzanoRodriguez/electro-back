import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Rating extends Document {
  @Prop({ min: 1, max: 5 })
  location: number;

  @Prop({ min: 1, max: 5 })
  cleanliness: number;

  @Prop({ min: 1, max: 5 })
  service: number;

  @Prop({ min: 1, max: 5 })
  valueForMoney: number;

  @Prop({ min: 1, max: 5 })
  food: number;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);