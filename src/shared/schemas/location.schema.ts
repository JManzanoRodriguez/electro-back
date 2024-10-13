import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Location extends Document {
  @Prop()
  address: string;

  @Prop()
  province?: string;

  @Prop()
  autonomousCommunity?: string;

  @Prop({ required: true })
  country: string;

  @Prop({ type: [Number], index: '2dsphere' })
  coordinates: number[];
}

export const LocationSchema = SchemaFactory.createForClass(Location);