import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";

export function ApiCreateEvents() {
    return applyDecorators(
        ApiOperation({ summary: 'Rota para criar um evento', description: 'Endpoint para criar um novo evento' }),
        ApiResponse({
            status: 201,
            description: 'Usuário criado com sucesso!',
            schema: {
                type: 'object',
                properties: {
                    id: { type: 'number', example: 1 },
                    title: { type: 'string', example: 'Férias' },
                    description: { type: 'string', example: 'Praia de Boa Viagem' },
                    startDateTime: { type: 'string', example: 'AAAA-MM-DD'},
                    endDateTime: { type: 'string', example: 'AAAA-MM-DD' },
                    status: { type: 'Status', example: 'SCHEDULED or COMPLETED or CANCELED' },
                    userId: { type: 'number', example: 1 },
                    createdAt: { type: 'string', example: 'AAAA-MM-DD' },
                    updatedAt: { type: 'string', example: 'AAAA-MM-DD' }
                },
            },
        }),
        ApiResponse({ status: 400, description: 'Erro ao criar um usuário' }),
        ApiResponse({ status: 500, description: 'Erro interno no servidor' })
    )
}


export function ApiGetEvents() {
    return applyDecorators(
        ApiOperation({ summary: 'Rota para exibir todos os eventos', description: 'Endpoint para listar todos os eventos' }),
        ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso!' }),
        ApiResponse({ status: 404, description: 'Nenhum evento encontrado.' }),
        ApiResponse({ status: 500, description: 'Erro interno no servidor' })
    )
}


export function ApiGetOneEventById() {
    return applyDecorators(
        ApiOperation({ summary: 'Rota para exibir um evento por ID.', description: 'Endpoint para listar o evento pelo ID' }),
        ApiParam({
            name: 'id',
            description: 'ID do usuário',
            example: 1,
        }),
        ApiResponse({ status: 200, description: `Evento retornado com sucesso!` }),
        ApiResponse({ status: 404, description: 'Nenhum evento encontrado com esse ID.' }),
        ApiResponse({ status: 500, description: 'Erro interno no servidor' })
    )
}


export function ApiPutEvent() {
    return applyDecorators(
        ApiOperation({ summary: 'Rota para atualizar um evento pelo ID.', description: 'Endpoint para atualizar um evento pelo ID' }),
        ApiParam({
            name: 'id',
            description: 'ID do evento a ser editado'
            }),
        ApiResponse({ status: 200, description: `Evento atualizado com sucesso!` }),
        ApiResponse({ status: 404, description: 'Nenhum evento encontrado com esse ID.' }),
        ApiResponse({ status: 500, description: 'Erro interno no servidor' })
    )
}


export function ApiDeleteEvent() {
    return applyDecorators(
        ApiOperation({ summary: 'Rota para deletar um evento pelo ID.', description: 'Endpoint para deletar um evento pelo ID' }),
        ApiParam({
            name: 'id',
            description: 'ID do evento a ser deletado'
        }),
        ApiResponse({ status: 200, description: `Evento deletado com sucesso!` }),
        ApiResponse({ status: 404, description: 'Nenhum evento encontrado com esse ID.' }),
        ApiResponse({ status: 500, description: 'Erro interno no servidor' })
    )
}