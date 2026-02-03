import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController 
{
  constructor(private readonly usersService: UsersService) {}

  @Post()//REQ
  @ApiOperation({ summary: 'Rota para criar um usuário.' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso!' })
  @ApiResponse({ status: 400, description: 'Erro ao criar usuário! '})
  create(@Body() createUserDto: CreateUserDto) 
  {
    return this.usersService.create(createUserDto);
  }

  @Get()//REQ
  @ApiOperation({ summary: 'Listar todos os usuários.'})
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso!' })
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado.' })
  findAll() 
  {
    return this.usersService.findAll();
  }

  @Get(':id')//REQ
  @ApiOperation({ summary: 'Listar usuário por ID.'})
  @ApiParam({
    name: 'id',
    description: 'ID do usuário',
    example: 1,
  })
  @ApiResponse({ status: 200, description: `Usuário retornado com sucesso!` })
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse ID.' })
  findById(@Param('id', ParseIntPipe) id: number)
  {
    return this.usersService.findById(id);
  }

  @Get('email/:email') //REQ     // esse email/:email ----> significa que ele vai procurar por email, pois se so fosse ":email" ele poderia confundir com o getbyID e dar erro 500
  @ApiOperation({ summary: 'Listar usuário por Email.'})
  @ApiParam({
    name: 'email',
    description: 'e-mail do usuário',
    example: 'example@email.com'
  })
  @ApiResponse({ status: 200, description: `Usuário retornado com sucesso!` })
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse Email.' })
  findByEmail(@Param('email', ParseIntPipe) email: string) 
  {
    return this.usersService.findByEmail(email);
  }

  @Put(':id')//REQ
  @ApiOperation({ summary: 'Atualizar um usuário pelo ID.'})
  @ApiParam({
    name: 'id',
    description: 'ID do usuário a ser editado'
  })
  @ApiResponse({ status: 200, description: `Usuário atualizado com sucesso!` })
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse ID.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateUserDto: UpdateUserDto,) 
  {
    return this.usersService.update(id, UpdateUserDto);
  }

  @Delete(':id')//REQ
  @ApiOperation({ summary: 'Deletar um usuário pelo ID.'})
  @ApiParam({
    name: 'id',
    description: 'ID do usuário a ser deletado'
  })
  @ApiResponse({ status: 200, description: `Usuário deletado com sucesso!` })
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse ID.' })
  delete(@Param('id', ParseIntPipe) id: number) 
  {
    return this.usersService.delete(id);
  }
}