import { errors, rotationCommands } from '../constants/index'
import { rotation, move } from'../stateless/index'
import { IExtractedContentData, IProcessedData, IErrorProcessedDataReturn } from '../interfaces/index'

export const proccessData = (data: IExtractedContentData): IProcessedData | IErrorProcessedDataReturn => {
    const sizeSplit = data.size.split(" ") // Extraindo o tamanho da grade
    
    if (sizeSplit.length !== 2) return { success: false, ...errors.invalidPlateauSize }
    // Se o tamanho da grade for inválido, retorna uma mensagem de erro
    // A validação feita anteriormente verificou se a primeira linha tinha um total de 3 dígitos, 
    // mas se o segundo dígito não for um "espaço", ainda estará inválido. 
    // Esta verificação mais detalhada, deixei para ser feita agora intencionalmente (para dar um feedback melhor).

    const maxWidth = sizeSplit[0] // "maxWidth" recebe o tamanho máximo de X
    const maxHeight = sizeSplit[1] // "maxHeight" recebe o tamanho máximo de Y
    const roversPositions = data.rovers // "roversPositions" recebe os dados referentes às posições rovers
    const commands = data.commands // "commands" recebe os dados referentes aos comandos dos rovers

    if (roversPositions.length === 0) return { success: false, ...errors.invalidPosition }
    // Se não encontrar nenhum item no array de posições dos rovers, retorna uma mensagem de erro

    if (commands.length === 0) return { success: false, ...errors.invalidInput }
    // Se não encontrar nenhum item no array de comandos dos rovers, retorna uma mensagem de erro
        
    let c = 0
    let response = []
    roversPositions.forEach(position => {
        const positionSplit = position.split(" ")
        if (positionSplit.length !== 3) return { error: errors.invalidPosition }
        // Se houver algum erro no array de posições dos rovers, retorna uma mensagem de erro
            
        const command = commands[c]
        const commandsSplit = command.split("")
        if (commandsSplit.length === 0) return { error: errors.invalidPosition }
        // Se houver algum erro no array de posições dos rovers, retorna uma mensagem de erro

        const positionObject = {
                x: positionSplit[0],
                y: positionSplit[1],
                direction: positionSplit[2]
            }

        commandsSplit.forEach(command => {
            const checkCommand = rotationCommands.includes(command)

            if (checkCommand) {
                const newDirection = rotation(positionObject.direction, command)
                if (!newDirection.success) return { error: errors.invalidDirection }
                positionObject.direction = newDirection.pos                
            } else {
                const newPosition = move(
                    positionObject.direction, 
                    positionObject.x, 
                    positionObject.y, 
                    maxWidth, 
                    maxHeight
                )
                if (!newPosition.success) return { error: errors.invalidPosition }
                positionObject.x = newPosition.x
                positionObject.y = newPosition.y
            }
        })
        response.push(positionObject.x +" "+ positionObject.y +" "+ positionObject.direction)
        
        c++
    })
    return { success: true, response }
}
