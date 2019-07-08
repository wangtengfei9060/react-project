import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom'
import { View as MenuSiderbar} from '../menuSiderbar/'
import { View as HomeDetail } from '../../containers/home/'
import List from '../../containers/list'

const { Header, Content, Sider } = Layout;

export default class Home extends Component {
    state = {
      collapsed: false
    };
    onCollapse = collapsed => {
      this.setState({ collapsed });
    };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
         <MenuSiderbar />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
              {this.props.children}
              <Route path="/11" component={HomeDetail} />
              <Route path="/21" component={List} />
          </Content>
        </Layout>
      </Layout>
    );
  }


}
