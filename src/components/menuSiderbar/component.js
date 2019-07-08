import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const { SubMenu }  = Menu;
class MenuSiderBar extends Component{

    render() {
        const { menuList } = this.props
        return (
            <Menu
                theme="dark" 
                mode="inline" 
                onClick={this.onMenuItemClick.bind(this)}
            >
                {this.handleRenderMenu(menuList)}
            </Menu>
        )
    }

    handleRenderMenu = (data) => {
        return data.map((item) => {
          if (item.children.length > 0 && "undefined" != typeof(item)) {
            
            return (
              <SubMenu title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>} key={item.key}
              >{ this.handleRenderMenu(item.children) }</SubMenu>
            )
          }
          return <Menu.Item key={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
            <Link to={item.key}></Link>
          </Menu.Item>
        })
    }
    
    onMenuItemClick = ({ key }) => {
        this.setState({
            selectedKeys: [key]
        })
    }
}

export default MenuSiderBar;
