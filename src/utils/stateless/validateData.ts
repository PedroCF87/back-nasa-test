export const validateData = (data: string): Boolean => {
    try {
        const linesLength = data.split(/\r\n|\r|\n/).length
        const lines = data.split(/\r\n|\r|\n/)        

        if (linesLength%2 === 0 && lines[linesLength-1]!=='') {          
          return false
        }
        // Se o arquivo tiver um número ímpar de linhas, gera uma mensagem de erro

        let linesCount = 0
        let validFile = true

        lines.forEach(line => {
          if (linesCount === 0 && line.length !== 3) validFile = false
          else if (linesCount !== 0 && linesCount%2 === 1 && line !== '' && line.length < 5) validFile = false
          else if (linesCount !== 0 && linesCount%2 === 0 && line !== '' && line.length === 0) validFile = false
          linesCount++
        })
        return validFile

    } catch (e) {
      return false
    }
}
