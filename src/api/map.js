import axios from 'axios'

export function getMaps(){
  return axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR06Q14ugr1OFcnQqfyPHQbHuwPLwT9oPlfS4JxHGdQrjUBKnWBCccFBBoQ')
}