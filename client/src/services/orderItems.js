import axios from 'axios'
import { config } from './config'


export async function addOrderItem(body) {
    try {
      const url = `${config.serverUrl}/orderItems`
  
      const response = await axios.post(url, body)
  
      return response.data
    } catch (ex) {
      console.error('exception: ', ex)
    }
  }
  

export async function getOrderItems() {
    try {
      const url = `${config.serverUrl}/orderItems`
  
      const response = await axios.get(url)
  
      return response.data
    } catch (ex) {
      console.error('exception: ', ex)
    }
  }
  