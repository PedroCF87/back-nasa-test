import { errors, cardinalPoints } from '../constants/index'

export const rotation = (direction: string, action: string) => {
    try {        
        const checkPosition = cardinalPoints.includes(direction)
        if (!checkPosition) return { success: false }
        let directionIndex = cardinalPoints.indexOf(direction)
        if (action === 'L') {
            if (directionIndex === 0) directionIndex = 3
            else directionIndex--
        } else if (action === 'R') {
            if (directionIndex === 3) directionIndex = 0
            else directionIndex++
        }
        return { success: true, pos: cardinalPoints[directionIndex] }
        
    } catch (e) {
      return { success: false, ...errors.invalidData }
    }
}
