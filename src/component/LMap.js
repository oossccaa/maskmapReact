import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import '../styles/map.sass'
// import { getMaps } from '../api/map'
class LMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lat: 23.675438,
      lng: 120.477616,
      zoom: 17
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} className="full-map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition((position)=>{
      this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
    })
    // let data = await getMaps()
    // console.log(data)
    
  }
}
export default LMap
