import React,{Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import User from './page/user';
import Role from './page/role';
import Detail from './page/detail';

const { Header, Sider, Content } = Layout

class Home extends Component {
    state = {
      collapsed: false,
    };
  
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };

    render() {
        return (<HashRouter>
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span><Link to='/user'>用户信息</Link></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span><Link to='/role'>角色信息</Link></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span><Link to='/detail'>用户角色详情</Link></span>
                    </Menu.Item>
                    </Menu>
                </Sider>

                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                    </Header>
                    <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                    }}
                    >
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <switch>
                            <Route path='/user' exact component={User}/>
                            <Route path='/role' component={Role}/>
                            <Route path='/detail' component={Detail}/>
                        </switch>
                    </div>
                    </Content>
                </Layout>
            </Layout>
        </HashRouter>
    );
    }
  }

export default Home;