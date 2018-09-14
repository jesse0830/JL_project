//首页
import React, {Component} from 'react'
import BottomTab from '../component/tab/BottomTab'
import NavBarIndex from '../component/navbar/NavBarIndex'
import 'antd-mobile/dist/antd-mobile.css';

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    state = {}

    render() {
        return (
            <div>
                <NavBarIndex/>
                <BottomTab/>
            </div>
        )
    }
}