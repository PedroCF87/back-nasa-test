import { errors } from '../constants/index'
import { Base64 } from '../statefull/index'

export const decodeData = (data: string) => {
    try {
        let base64 = new Base64()
        let decoded = base64.decode(data)        
        return { 
          success: true, 
          decoded
        }
    } catch (e) {
      return { success: false, ...errors.invalidData }
    }
}
