import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './schemas/comment.schema';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(@Body() createCommentDto: Comment): Promise<Comment> {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  async findAll(
    @Query('establishmentId') establishmentId: string,
    @Query('establishmentType') establishmentType: string,
    @Query() paginationQuery: PaginationQueryDto
  ): Promise<Comment[]> {
    return this.commentsService.findAll(establishmentId, establishmentType, paginationQuery);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Comment> {
    return this.commentsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCommentDto: Comment): Promise<Comment> {
    return this.commentsService.update(id, updateCommentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Comment> {
    return this.commentsService.remove(id);
  }
}