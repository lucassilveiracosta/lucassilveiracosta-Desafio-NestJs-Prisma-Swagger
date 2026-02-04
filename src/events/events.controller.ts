import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiCreateEvents, ApiDeleteEvent, ApiGetEvents, ApiGetOneEventById, ApiPutEvent } from './events.swagger';

@Controller('events')
export class EventsController 
{
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @ApiCreateEvents()
  create(@Body() createEventDto: CreateEventDto) 
  {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  @ApiGetEvents()
  findAll() 
  {
    return this.eventsService.findAll();
  }

  @Get(':id')
  @ApiGetOneEventById()
  findOne(@Param('id') id: number) 
  {
    return this.eventsService.findById(id);
  }

  @Put(':id')
  @ApiPutEvent()
  update(
    @Param('id' , ParseIntPipe) id: number, 
    @Body() updateEventDto: UpdateEventDto) 
  {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  @ApiDeleteEvent()
  remove(@Param('id', ParseIntPipe) id: number) 
  {
    return this.eventsService.delete(id);
  }
}
