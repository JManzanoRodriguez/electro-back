import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

  async create(createCommentDto: Comment): Promise<Comment> {
    const createdComment = new this.commentModel(createCommentDto);
    return createdComment.save();
  }

  async findAll(establishmentId: string, establishmentType: string, paginationQuery: PaginationQueryDto): Promise<Comment[]> {
    const { limit = 10, offset = 0 } = paginationQuery;
    return this.commentModel
      .find({ establishmentId, establishmentType })
      .skip(offset)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<Comment> {
    return this.commentModel.findById(id).exec();
  }

  async update(id: string, updateCommentDto: Comment): Promise<Comment> {
    return this.commentModel.findByIdAndUpdate(id, updateCommentDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Comment> {
    return this.commentModel.findByIdAndRemove(id).exec();
  }
}