import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService 
{
  constructor(private prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto) 
  {
    return this.prisma.user.create({ data: createEventDto })
  }

  async findAll() 
  {
    return this.prisma.user.findMany();
  }

  async findById(id: number) 
  {
    const user = await this.prisma.user.findUnique({ where: { id: id } });
        
    if(!user) throw new NotFoundException(`User with ID ${id} not found.`);
    return user; 
  }

  async update(id: number, updateEventDto: UpdateEventDto) 
  {
    await this.findById(id);

    return this.prisma.user.update({
      where: { id: id },
      data: updateEventDto,
    })
  }

  async delete(id: number) 
  {
    await this.findById(id);

    return this.prisma.user.delete({
      where: { id: id },
    })
  }
}
