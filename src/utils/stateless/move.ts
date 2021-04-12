import { errors, cardinalPoints } from '../constants/index'

export const move = (direction: string, x: string, y: string, maxWidth: string, maxHeight: string) => {
    try {
        let newX = x
        let newY = y
        if (direction === 'N') { // Y+1
            if (y === maxHeight) return { success: false, ...errors.crashError }
            newY = (parseInt(y)+1).toString()
        
        } else if (direction === 'E') { // X+1
            if (x === maxWidth) return { success: false, ...errors.crashError }
            newX = (parseInt(x)+1).toString()
        
        } else if (direction === 'S') { // Y-1
            if (y === '0') return { success: false, ...errors.crashError }
            newY = (parseInt(y)-1).toString()
        
        } else if (direction === 'W') { // X-1
            if (x === '0') return { success: false, ...errors.crashError }
            newX = (parseInt(x)-1).toString()
        }

        return { success: true, x: newX, y: newY }
        
    } catch (e) {
      return { success: false, ...errors.invalidData }
    }
}
