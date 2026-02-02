import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController 
{
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) 
  {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() 
  {
    return this.usersService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number)
  {
    return this.usersService.findById(id);
  }

  @Get('email/:email')      // esse email/:email ----> significa que ele vai procurar por email, pois se so fosse ":email" ele poderia confundir com o getbyID e dar erro 500
  findByEmail(@Param('email', ParseIntPipe) email: string) 
  {
    return this.usersService.findByEmail(email);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateUserDto: UpdateUserDto,) 
  {
    return this.usersService.update(id, UpdateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) 
  {
    return this.usersService.delete(id);
  }
}
