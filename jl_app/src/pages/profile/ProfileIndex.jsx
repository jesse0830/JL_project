import React, {Component} from 'react'
import {Button, InputItem, WhiteSpace,Toast} from 'antd-mobile'
import {Icon} from 'antd'
import './ProfileIndex.css'
import ajaxGetData from '../../ajaxGetData'

let userName = ""
let passWord = ""
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
        const self = this
        ajaxGetData({
            url: '/api/server/login',
            data: {"username":userName,"password":passWord},
            success: function(result) {
                console.log(result)
                if (result) {
                    Toast.info("登陆成功",2)
                    clearTimeout(setTimeoutId)
                    let setTimeoutId = setTimeout(()=>{
                        self.setState({
                            login:true
                        })
                    },2000)
                }
                else{
                    Toast.info("登陆失败",2)
                }
            }
        })
    }
    //登出
    logout = () => {
        console.log("click logout")
    }

    userNameOnchange = (e) => {
        userName = e
    }

    passWordOnchange = (e) => {
        passWord = e
    }
    render() {
        return (
            <div className="login-page" style={{height: document.documentElement.clientHeight - 85}}>
                <div className="input-main" style={{visibility:this.state.login ? "hidden" : "visible"}}>
                    <InputItem
                        className="user-input"
                        placeholder="请输入用户名"
                        clear={true}
                        name="userNameInput"
                        onChange={this.userNameOnchange}/>
                    <WhiteSpace/>
                    <InputItem
                        className="pwd-input"
                        type="password"
                        placeholder="请输入密码"
                        clear={true}
                        name="passwordInput"
                        onChange={this.passWordOnchange}/>
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