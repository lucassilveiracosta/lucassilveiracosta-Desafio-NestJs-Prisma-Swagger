import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiCreateUser, ApiDeleteUser, ApiGetOneUserByEmail, ApiGetOneUserById, ApiGetUser, ApiPutUser } from './users.swagger';

@ApiTags('users')
@Controller('users')
export class UsersController 
{
  constructor(private readonly usersService: UsersService) {}

  @Post()//REQ
  @ApiCreateUser()
  create(@Body() createUserDto: CreateUserDto) 
  {
    return this.usersService.create(createUserDto);
  }

  @Get()//REQ
  @ApiGetUser()
  findAll() 
  {
    return this.usersService.findAll();
  }

  @Get(':id')//REQ
  @ApiGetOneUserById()
  findById(@Param('id', ParseIntPipe) id: number)
  {
    return this.usersService.findById(id);
  }

  @Get('email/:email') //REQ     // esse email/:email ----> significa que ele vai procurar por email, pois se so fosse ":email" ele poderia confundir com o getbyID e dar erro 500
  @ApiGetOneUserByEmail()
  findByEmail(@Param('email', ParseIntPipe) email: string) 
  {
    return this.usersService.findByEmail(email);
  }

  @Put(':id')//REQ
  @ApiPutUser()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateUserDto: UpdateUserDto,) 
  {
    return this.usersService.update(id, UpdateUserDto);
  }

  @Delete(':id')//REQ
  @ApiDeleteUser()
  delete(@Param('id', ParseIntPipe) id: number) 
  {
    return this.usersService.delete(id);
  }
}