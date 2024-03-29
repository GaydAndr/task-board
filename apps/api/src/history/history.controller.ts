import {Controller, Get, Post, Body, Param, Req, RawBodyRequest, UsePipes, ValidationPipe} from '@nestjs/common';
import {HistoryService} from './history.service';
import {CreateHistoryDto} from './dto/create-history.dto';
import {Request} from "express";

@Controller('history')
export class HistoryController {
  constructor(
    private readonly historyService: HistoryService
  ) {
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(
    @Body() createHistoryDto: CreateHistoryDto,
    @Req() req: RawBodyRequest<Request>
  ) {
    return this.historyService.create(
      createHistoryDto,
      req.body.task
    );
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.historyService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historyService.findOne(+id);
  }

}
