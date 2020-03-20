import { SET_MAPS } from './actionType.js'
export function setMaps(map) {
  return {
    type: SET_MAPS,
    maps: map
  }
}