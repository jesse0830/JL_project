//导航栏
import React, {Component} from 'react'
import {NavBar} from 'antd-mobile';
import {Icon} from 'antd';

export default class NavBarIndex extends Component {
    constructor(props) {
        super(props);
        console.log("props::::" + JSON.stringify(props))
    }

    state = {
        login: true,
        userName: 'JesseYoung'
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    rightContent={this.state.login ? [
                        <Icon key="0" type="user" style={{fontSize: '20px'}}/>,
                        <div key={this.state.userName}>{this.state.userName}</div>
                    ] : [<Icon key="0" type="user" style={{fontSize: '20px'}}/>,
                        <div key={this.state.userName}>未登录</div>]}
                >{this.props.navbarTitle}</NavBar>
            </div>
        )
    }
}