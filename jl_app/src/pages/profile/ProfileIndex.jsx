import React, {Component} from 'react'
import {Button, InputItem, WhiteSpace} from 'antd-mobile'
import {Icon} from 'antd'
import './ProfileIndex.css'

export default class ProfileIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login : false
        }
    }

    componentDidMount() {

    }

    //登陆
    login = () => {
        console.log("click login")
    };
    //登出
    logout = () => {
        console.log("click logout")
    };

    render() {
        return (
            <div className="login-page" style={{height: document.documentElement.clientHeight - 85}}>
                <div className="input-main">
                    <InputItem
                        className="user-input"
                        placeholder="请输入用户名"
                        clear={true}
                        name="userNameInput"/>
                    <WhiteSpace/>
                    <InputItem
                        className="pwd-input"
                        type="password"
                        placeholder="请输入密码"
                        clear={true}
                        name="passwordInput"/>
                    <WhiteSpace/>
                    <Button
                        type="primary"
                        size="small"
                        className="login-button"
                        onClick={this.login}>
                        登陆
                    </Button>
                </div>
            </div>
        )
    }
}