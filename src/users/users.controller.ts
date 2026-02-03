import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController 
{
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Rota para criar um usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso!' })
  @ApiResponse({ status: 400, description: 'Erro ao criar usuário! '})
  create(@Body() createUserDto: CreateUserDto) 
  {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários '})
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso!' })
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado.' })
  findAll() 
  {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar usuário por ID '})
  @ApiResponse({ status: 200, description: `Usuário retornado com sucesso!` })
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse ID.' })
  findById(@Param('id', ParseIntPipe) id: number)
  {
    return this.usersService.findById(id);
  }

  @Get('email/:email')      // esse email/:email ----> significa que ele vai procurar por email, pois se so fosse ":email" ele poderia confundir com o getbyID e dar erro 500
  @ApiOperation({ summary: 'Listar usuário por Email '})
  @ApiResponse({ status: 200, description: `Usuário retornado com sucesso!` })
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse Email.' })
  findByEmail(@Param('email', ParseIntPipe) email: string) 
  {
    return this.usersService.findByEmail(email);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um usuário'})
  @ApiResponse({ status: 200, description: `Usuário retornado com sucesso!` })
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse ID.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateUserDto: UpdateUserDto,) 
  {
    return this.usersService.update(id, UpdateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um usuário'})
  @ApiResponse({ status: 200, description: `Usuário deletado com sucesso!` })
  @ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse ID.' })
  delete(@Param('id', ParseIntPipe) id: number) 
  {
    return this.usersService.delete(id);
  }
}