// import axios from 'axios'
import points from '../assets/points.json'
export function getMaps(){
  return points.features
  // return axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR06Q14ugr1OFcnQqfyPHQbHuwPLwT9oPlfS4JxHGdQrjUBKnWBCccFBBoQ')
}