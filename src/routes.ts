import { Router } from 'express'
import { inputDataController } from './useCases/InputData/index'

const router = Router()

router.post('/input-data', (request, response) => inputDataController.handle(request, response))

export { router }