import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

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