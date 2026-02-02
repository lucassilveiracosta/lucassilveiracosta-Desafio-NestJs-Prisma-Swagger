import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class EventsService 
{
  constructor(private prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto) 
  {
    const conflict = await this.prisma.event.findFirst({ where: {
      startDateTime: createEventDto.startDateTime ,
      userId: createEventDto.userId,
    }})

    if(conflict)
    {
      throw new ConflictException(`Você ja possui um evento agendado nesse horario!`)
    }
    
    return this.prisma.event.create({ data: createEventDto })
  }

  async findAll() 
  {
    return this.prisma.event.findMany();
  }

  async findById(id: number) 
  {
    const user = await this.prisma.event.findUnique({ where: { id: id } });
        
    if(!user) throw new NotFoundException(`User with ID ${id} not found.`);
    return user; 
  }

  async update(id: number, updateEventDto: UpdateEventDto) 
  {
    await this.findById(id);

    return this.prisma.event.update({
      where: { id: id },
      data: updateEventDto,
    })
  }

  async delete(id: number) 
  {
    await this.findById(id);

    return this.prisma.event.delete({
      where: { id: id },
    })
  }
}
