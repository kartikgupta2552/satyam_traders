import axios from 'axios'
import { config } from './config'


export async function addItem(itemName , itemPrice, itemCategoryId) {
    try {
      const url = `${config.serverUrl}/item`
  
      const body = {itemName , itemPrice, itemCategoryId}
  
      const response = await axios.post(url, body)
  
      return response.data
    } catch (ex) {
      console.error('exception: ', ex)
    }
  }
  

export async function getAllItems() {
    try {
      const url = `${config.serverUrl}/item`
  
      const response = await axios.get(url)
  
      return response.data
    } catch (ex) {
      console.error('exception: ', ex)
    }
  }
  

export async function getItemsByCategory(categoryId) {
    try {
      const url = `${config.serverUrl}/item/category/${categoryId}`
  
      const response = await axios.get(url)
  
      return response.data
    } catch (ex) {
      console.error('exception: ', ex)
    }
  }
