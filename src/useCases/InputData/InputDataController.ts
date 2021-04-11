import { Request, Response } from 'express'
import { errors } from '../../utils/constants/index'

export class InputDataController {

    handle(request: Request, response: Response): Response {
        const { data } = request.body

        if (data) return response.status(200).json({ data })
        else return response.status(500).json({ error: errors.invalidInput })
    }
}
