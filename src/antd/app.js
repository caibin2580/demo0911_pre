import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {Route, HashRouter, Link, Switch} from 'react-router-dom';
import Home from '../component/page/home';
import About from '../component/page/about';
import Mine from '../component/page/mine';

const { Sider, Content, Footer} = Layout;
const Menuitem = Menu.Item;

class App extends Component{
    render(){
        return <HashRouter>
            <LayOut className='cl_layout'>
                <Sider width='240'>
                    <Menu theme='dark'>
                        <Menuitem><Link to='/home'>主页</Link></Menuitem>
                        <Menuitem><Link to='/mine'>我的</Link></Menuitem>
                        <Menuitem><Link to='/about'>关于</Link></Menuitem>
                    </Menu>
                </Sider>
                <Content>123
                <Switch>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/mine' component={Mine}/>
                </Switch>
             
                </Content> 
            </LayOut>
        </HashRouter>
    }
}

export default App;