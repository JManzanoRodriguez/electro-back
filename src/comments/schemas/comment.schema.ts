import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ type: MongooseSchema.Types.ObjectId, refPath: 'establishmentType' })
  establishmentId: MongooseSchema.Types.ObjectId;

  @Prop({ enum: ['Hotel', 'Restaurant', 'LeisurePlace'] })
  establishmentType: string;

  @Prop()
  content: string;

  @Prop()
  author: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);