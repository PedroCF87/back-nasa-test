import { Request, Response } from 'express'
import { errors } from '../../utils/constants/index'
import { validateData, decodeData, extractData, proccessData } from '../../utils/stateless/index'

export class InputDataController {

    handle(request: Request, response: Response): Response {        
        const { data } = request.body // Extraindo os Dados do Input
        if (!data) return response.status(500).json({ error: errors.invalidInput })        

        const dataDecoded = decodeData(data) // Decodificando os Dados

        if (!dataDecoded.success) return response.status(500).json({ error: errors.invalidData })
        // Se ocorrer algum erro na decodificação, retorna uma mensagem de erro

        if (!dataDecoded.decoded || !validateData(dataDecoded.decoded)) return response.status(500).json({ error: errors.invalidData })
        // Se os dados decodificados forem inválidos, retorna uma mensagem de erro

        const extractedData = extractData(dataDecoded.decoded) // Extraindo os Dados

        if (!extractedData.extracted || !extractedData.success) return response.status(500).json({ error: errors.invalidData })
        // Se ocorrer algum erro na extração dos dados, retorna uma mensagem de erro

        const result = proccessData(extractedData.extracted)

        if (!result.success) return response.status(500).json({ error: { message: result.message } })
        // Se ocorrer algum erro ao processar os dados, retorna uma mensagem de erro

        if (extractedData.success) return response.status(200).json({ result: result.response })
        else return response.status(500).json({ error: errors.invalidInput })
    }
}
