import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";

//Criando um único decorator
export function ApiCreateUser() {
    return applyDecorators(
        ApiOperation({ summary: 'Rota para criar um usuário.', description: 'Endpoint para criar um novo usuário' }),
        ApiResponse({ 
            status: 201, 
            description: 'Usuário criado com sucesso!',
            schema: {
                type: 'object',
                properties: {
                    id: { type: 'number', example: 1 },
                    email: {type: 'string', example: 'example@email.com' },
                    fullName: {type: 'string', example: 'Fulano de Tal' },
                    cpf: { type: 'string', example: '12345678910' },
                    password: { type: 'string', example: 'senha123'},
                    phoneNumber: { type: 'string', example: '(DDD) 9 1234-5678' },
                    birthDate: { type: 'string', example: 'AAAA-MM-DD' },
                    createdAt: { type: 'string', example: 'AAAA-MM-DD' },
                    updatedAt: { type: 'string', example: 'AAAA-MM-DD' }
                },
            },
        }),
        ApiResponse({ status: 400, description: 'Erro ao criar usuário!' }),
        ApiResponse({ status: 500, description: 'Erro interno no servidor' })
    )
}


export function ApiGetUser() {
    return applyDecorators(
        ApiOperation({ summary: 'Rota para exibir todos os usuários', description: 'Endpoint para listar todos os usuários' }),
        ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso!' }),
        ApiResponse({ status: 404, description: 'Nenhum usuário encontrado.' }),
        ApiResponse({ status: 500, description: 'Erro interno no servidor' })
    )
}


export function ApiGetOneUserById() {
    return applyDecorators(
        ApiOperation({ summary: 'Rota para exibir um usuário por ID.', description: 'Endpoint para listar o usuário pelo ID' }),
        ApiParam({
            name: 'id',
            description: 'ID do usuário',
            example: 1,
        }),
        ApiResponse({ status: 200, description: `Usuário retornado com sucesso!` }),
        ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse ID.' }),
        ApiResponse({ status: 500, description: 'Erro interno no servidor' })
    )
}


export function ApiGetOneUserByEmail() {
    return applyDecorators(
        ApiOperation({ summary: 'Rota para exibir um usuário por Email.', description: 'Endpoint para listar o usuário pelo E-mail' }),
        ApiParam({
            name: 'email',
            description: 'e-mail do usuário',
            example: 'example@email.com'
        }),
        ApiResponse({ status: 200, description: `Usuário retornado com sucesso!` }),
        ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse Email.' }),
        ApiResponse({ status: 500, description: 'Erro interno no servidor' })
    )
}


export function ApiPutUser() {
    return applyDecorators(
        ApiOperation({ summary: 'Rota para atualizar um usuário pelo ID.', description: 'Endpoint para atualizar um usuário pelo ID' }),
        ApiParam({
            name: 'id',
            description: 'ID do usuário a ser editado'
            }),
        ApiResponse({ status: 200, description: `Usuário atualizado com sucesso!` }),
        ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse ID.' }),
        ApiResponse({ status: 500, description: 'Erro interno no servidor' })
    )
}


export function ApiDeleteUser() {
    return applyDecorators(
        ApiOperation({ summary: 'Rota para deletar um usuário pelo ID.', description: 'Endpoint para deletar um usuário pelo ID' }),
        ApiParam({
            name: 'id',
            description: 'ID do usuário a ser deletado'
        }),
        ApiResponse({ status: 200, description: `Usuário deletado com sucesso!` }),
        ApiResponse({ status: 404, description: 'Nenhum usuário encontrado com esse ID.' }),
        ApiResponse({ status: 500, description: 'Erro interno no servidor' })
    )
}