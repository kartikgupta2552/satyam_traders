import axios from 'axios'
import { config } from './config'


export async function getItemCategories() {
    try {
      const url = `${config.serverUrl}/itemCategory`
  
      const response = await axios.get(url)
  
      return response.data
    } catch (ex) {
      console.error('exception: ', ex)
    }
  }
  