export const errors = {
    // Erros de Validação da requsição "input-data"
    invalidInput: {
        code: 1,
        message: 'Dados inválidos. Campo data não encontrado'
    },
    invalidNumberLines: {
        code: 2,
        message: 'Número de linhas inválido. O arquivo deve ter um número ímpar de linhas.'
    },
    invalidRequest: {
        code: 3,
        message: 'Pedido inválido.'
    },
    invalidData: {
        code: 4,
        message: 'Dados inválidos. Não foi possível decodificar a requisição.'
    },
    invalidPlateauSize: {
        code: 5,
        message: 'O tamanho do platô está inválido.'
    },
    invalidPosition: {
        code: 6,
        message: 'Posição de um ou mais rovers inválida.'
    },
    invalidDirection: {
        code: 7,
        message: 'Orientação de um ou mais rovers inválida.'
    },
    crashError: {
        code: 8,
        message: 'Erro de movimento. O rover teria saído da grade, mas o sistema evitou maiores danos.'
    },
    proccessError: {
        code: 9,
        message: 'Erro ao processar o arquivo.'
    }
}
