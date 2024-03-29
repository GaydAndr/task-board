import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Req,
  RawBodyRequest
} from '@nestjs/common';
import {SubListService} from './sub_list.service';
import {CreateSubListDto} from './dto/create-sub_list.dto';
import {UpdateSubListDto} from './dto/update-sub_list.dto';
import {Request} from "express";

@Controller('sub-list')
export class SubListController {
  constructor(
    private readonly subListService: SubListService
  ) {
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(
    @Body() createSubListDto: CreateSubListDto,
    @Req() req: RawBodyRequest<Request>
  ) {
    return this.subListService.create(
      createSubListDto,
      req.body.board
    );
  }

  @Post('createDefault')
  createDefaultSubLists(@Req() req: RawBodyRequest<Request>) {
    return this.subListService.createDefaultSubLists(req.body.board)
  }

  @Get('all/:id')
  findAll(@Param('id') id: string) {
    return this.subListService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subListService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubListDto: UpdateSubListDto) {
    return this.subListService.update(id, updateSubListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subListService.remove(id);
  }
}
