import React from 'react'
import '../styles/sidebar.sass'
class SideBar extends React.Component {
  constructor(){
    super()
    this.state = {
      isHidden: false
    }
  }

  handleClick(){
    this.setState({isHidden:!this.state.isHidden})
  }

  render() {
    let sidebar = "sidebar";
    if(this.state.isHidden){
      sidebar += " sidebar-hidden"
    }
    return (
      <div className={sidebar}>
        <div className="sidebar-content">
          <div className="sidebar-title">星期二</div>
          <div className="sidebar-remind">
            <div className="row">2020-03-10</div>
            <div className="row">
              身分證末碼為 <span className="highlight">2,4,6,8,0</span>可購買
            </div>
          </div>
        </div>
        <div className="sidebar-search">
          <input type="text" placeholder="搜尋區域,地址,藥局" />
          <i className="fas fa-search"></i>
        </div>
        <div className="sidebar-list">
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
        </div>
        <div className="sidebar-drop" onClick={()=>{this.handleClick()}}>
          <i className="fas fa-chevron-left"></i>
        </div>
      </div>
    )
  }
}

export default SideBar
