import React from 'react'
import '../styles/sidebar.sass'
import dayjs from 'dayjs'
import * as L from 'leaflet'
class SideBar extends React.Component {
  constructor() {
    super()
    this.state = {
      isHidden: false,
      week: 1,
      day: ''
    }
  }

  handleClick() {
    this.setState({ isHidden: !this.state.isHidden })
  }

  goToStore = item => {
    console.log(item)
  }

  setWeek() {
    const week = dayjs().day()
    const day = dayjs().format('YYYY-MM-DD')
    this.setState({
      week: week,
      day: day
    })
  }

  componentDidMount() {
    this.setWeek()
  }

  render() {
    let sidebar = 'sidebar'
    if (this.state.isHidden) {
      sidebar += ' sidebar-hidden'
    }
    let weekText,weekContent
    switch (this.state.week) {
      case 0:
        weekText = '星期日'
        break
      case 1:
        weekText = '星期一'
        break
      case 2:
        weekText = '星期二'
        break
      case 3:
        weekText = '星期三'
        break
      case 4:
        weekText = '星期四'
        break
      case 5:
        weekText = '星期五'
        break
      case 6:
        weekText = '星期六'
        break
    }
    switch (this.state.week) {
      case 1:
      case 3:
      case 5:
        weekContent = (
          <div className="row">
            身分證末碼為 <span className="highlight">2,4,6,8,0</span>可購買
          </div>
        )
        break
      case 2:
      case 4:
      case 6:
        weekContent = (
          <div className="row">
            身分證末碼為 <span className="highlight">2,4,6,8,0</span>可購買
          </div>
        )
        break
      case 0:
        weekContent = (
        <div className="row">
          在藥局營業時間內都可以購買口罩
        </div>)
    }

    return (
      <div className={sidebar}>
        <div className="sidebar-content">
    <div className="sidebar-title">{weekText}</div>
          <div className="sidebar-remind">
            <div className="row">{this.state.day}</div>
            {weekContent}
          </div>
        </div>
        <div className="sidebar-search">
          <input type="text" placeholder="搜尋區域,地址,藥局" />
          <i className="fas fa-search"></i>
        </div>
        <div className="sidebar-list">
          {this.props.nears.map((item, index) => {
            return (
              <div
                className="sidebar-card"
                key={`card-${index}`}
                onClick={() => {
                  this.goToStore(item)
                }}
              >
                <div className="title">{item.properties.name}</div>
                <div className="address">{item.properties.address}</div>
                <div className="phone">{item.properties.phone}</div>
                <div>{item.properties.note}</div>
                <div className="flex">
                  <div className="adult">
                    <div>成人口罩</div>
                    <div>{item.properties.mask_adult}</div>
                  </div>
                  <div className="child">
                    <div>兒童口罩</div>
                    <div>{item.properties.mask_child}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div
          className="sidebar-drop"
          onClick={() => {
            this.handleClick()
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </div>
      </div>
    )
  }
}

export default SideBar
