import React from 'react'
import { connect } from 'react-redux'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import '../styles/map.sass'
import { getMaps } from '../api/map'
import { setMaps } from '../reducers/action.js'
import * as L from 'leaflet'
import SideBar from '../component/SideBar.js'

const mapStateToProps = state => ({
  maps: state.maps
})

const mapDispatchToProps = dispatch => {
  return {
    setMaps: map => {
      dispatch(setMaps(map))
    }
  }
}

class LMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 25.0481495,
      lng: 121.5138807,
      zoom: 18,
      nears: [],
      selfIcon: new L.Icon({
        iconUrl:
          'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
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
        <Marker icon={this.state.selfIcon} position={position}>
          <Popup>您的位置</Popup>
        </Marker>
        {this.state.nears.map((item, index) => {
          return (
            <Marker key={index} position={item.geometry.coordinates}>
              <Popup>
                <div className="sidebar-card">
                  <div className="title">惠生大藥局</div>
                  <div className="address">雲林縣斗南鎮中天里文元街50號</div>
                  <div className="phone">05-5972478</div>
                  <div className="flex">
                    <div className="adult">
                      <div>成人口罩</div>
                      <div>577</div>
                    </div>
                    <div className="child">
                      <div>兒童口罩</div>
                      <div>2501</div>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        })}
        <SideBar />
      </Map>
    )
  }

  async componentDidMount() {
    let data = await getMaps()
    await this.props.setMaps(data)
    this.getNearStore()
  }

  getNearStore() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
      let maps = this.props.maps
        .map(item => {
          item.distince = this.getDistance(
            [this.state.lat, this.state.lng],
            item.geometry.coordinates.reverse()
          )
          return item
        })
        .sort((a, b) => a.distince - b.distince)
      this.setState({
        nears: maps.slice(0, 100)
      })
    })
  }

  getDistance(origin, destination) {
    // return distance in meters
    var lon1 = this.toRadian(origin[1]),
      lat1 = this.toRadian(origin[0]),
      lon2 = this.toRadian(destination[1]),
      lat2 = this.toRadian(destination[0])

    var deltaLat = lat2 - lat1
    var deltaLon = lon2 - lon1

    var a =
      Math.pow(Math.sin(deltaLat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2)
    var c = 2 * Math.asin(Math.sqrt(a))
    var EARTH_RADIUS = 6371
    return c * EARTH_RADIUS
  }

  toRadian(degree) {
    return (degree * Math.PI) / 180
  }
}

const MapPage = connect(mapStateToProps, mapDispatchToProps)(LMap)
export default MapPage
