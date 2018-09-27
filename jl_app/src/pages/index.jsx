//首页
import React, {Component} from 'react'
import NavBarIndex from './component/navbar/NavBarIndex'
import BottomBar from './component/tab/BottomBar'
const navBarJson = require('./pageJson')
export default class Index extends Component {
    constructor(props) {
        super(props);
        console.log("navBarJson:::" + JSON.stringify(navBarJson))
    }
    state = {}

    render() {
        return (
            <div>
                <NavBarIndex navbarTitle={navBarJson.navBarData[0].title}/>
                <BottomBar/>
            </div>
        )
    }
}