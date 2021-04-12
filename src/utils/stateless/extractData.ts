import { errors } from '../constants/index'
import { IExtractedData, IErrorExtractDataReturn } from '../interfaces/index'

export const extractData = (data: string): IExtractedData | IErrorExtractDataReturn => {
    try {
        const lines = data.split(/\r\n|\r|\n/)
        let linesCount = 0
        let formatedData = {
            size: '',
            rovers: [],
            commands: []
        }

        lines.forEach(line => {
            if (linesCount === 0) formatedData.size = line
            else if (linesCount%2 === 1 && line !== '') {
                let rovers = formatedData.rovers
                rovers.push(line)
                formatedData.rovers = rovers
            } else if (linesCount%2 === 0 && line !== '') {
                let commands = formatedData.commands
                commands.push(line)
                formatedData.commands = commands
            }
            linesCount++
        })
        return { 
          success: true, 
          extracted: formatedData
        }
    } catch (e) {
      return { success: false, extracted: {}, ...errors.invalidRequest }
    }
}
