import React, {Component} from 'react'
import {Button, InputItem, WhiteSpace,Toast,Modal} from 'antd-mobile'
import {Icon} from 'antd'
import './ProfileIndex.css'
import ajaxGetData from '../../ajaxGetData'
import register from "../../registerServiceWorker";

let userName = ""
let passWord = ""

let registerName = ""
let registerPwd = ""

export default class ProfileIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login : false,
            registerModal : false,
            userName : ""
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

    register = () => {
        console.log("click register button")

        this.setState({
            registerModal : true
        })

    }


    userNameOnchange = (e) => {
        userName = e
    }

    passWordOnchange = (e) => {
        passWord = e
    }

    registerUserNameOnchange = (e) => {
        registerName = e
    }

    registerPassWordOnchange = (e) => {
        registerPwd = e
    }

    onClose = (modal) => {
        this.setState({
            registerModal : modal
        })
        console.log("cancel register")
    }

    //注册函数
    onRegister = () => {
        const self = this
        ajaxGetData({
            url: '/api/server/register',
            data: {"username":registerName,"password":registerPwd},
            success: function(result) {
                console.log(result)
                if (result.result) {

                    userName = registerName
                    passWord = ""
                    // registerPwd = ""
                    // registerName = ""

                    Toast.info("注册成功",2)
                    clearTimeout(setTimeoutId)
                    let setTimeoutId = setTimeout(()=>{
                        self.setState({
                            userName : userName,
                            registerModal : false
                        })
                    },2000)
                }
                else{
                    Toast.info("注册失败",2)
                }
            }
        })
    }

    render() {
        return (
            <div className="login-page" style={{height: document.documentElement.clientHeight - 85}}>
                <div className="input-main" style={{visibility:this.state.login ? "hidden" : "visible"}}>
                    <InputItem
                        ref="userNameInput"
                        className="user-input"
                        placeholder="请输入用户名"
                        value={registerName}
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
                    <WhiteSpace/>
                    <Button
                        type="ghost"
                        size="small"
                        className="register-button"
                        onClick={this.register}>
                        注册
                    </Button>
                </div>
                <Modal className="modal-css"
                    visible={this.state.registerModal}
                       transparent
                       maskClosable={true}
                       title="注册"
                       footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onRegister(); } },{ text: 'Cancel', onPress: () => { console.log('cancel'); this.onClose(false); } }]}
                >
                    <div className="register-main" >
                        <InputItem
                            className="register-user-input"
                            placeholder="请输入注册用户名"
                            clear={true}
                            name="registerUserNameInput"
                            onChange={this.registerUserNameOnchange}/>


                        <span className="tips">
                            * 建议使用手机号注册
                        </span>



                        <InputItem
                            className="register-pwd-input"
                            placeholder="请输入注册密码"
                            clear={true}
                            name="registerPwdNameInput"
                            onChange={this.registerPassWordOnchange}/>
                        <WhiteSpace/>
                    </div>
                </Modal>
            </div>
        )
    }
}