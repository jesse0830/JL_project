import {TabBar} from 'antd-mobile'
import {Icon} from 'antd'
import React, {Component} from 'react'
import MainPage from '../../mainPage/MainPage'
import AmuseIndex from '../../amusement/AmuseIndex'
import FootPrintIndex from '../../myFootPrint/FootPrintIndex'
import TravelLineIndex from '../../travelLine/TravelLineIndex'
import ProfileIndex from '../../profile/ProfileIndex'
const pageJson = require('../../pageJson')
const bottomTabData = pageJson.bottomTabInfo.data
const renderContent = [<FootPrintIndex/>,<TravelLineIndex/>,<MainPage/>,<AmuseIndex/>,<ProfileIndex/>]
export default class BottomBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,
            hidden: false,
            fullScreen: false,
        };
    }

    componentDidMount(){
        for(let i = 0; i < bottomTabData.length; i++){
            bottomTabData[i].renderContent = renderContent[i]
        }
        //设置首页
        this.setState({
            selectedTab:2
        })
    }

    render() {
        console.log("bottomTabData:::::" + JSON.stringify(bottomTabData))
        return (
            <div style={this.state.fullScreen ? {
                position: 'fixed',
                height: '100%',
                width: '100%',
                top: 0
            } : {height: 400}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    {bottomTabData.map((value,index) => <TabBar.Item
                        key={index}
                        icon={<Icon type={value.iconType} style={{fontSize: '20px'}}/>}
                        selectedIcon={<Icon type={value.iconType} style={{fontSize: '28px'}}/>}
                        title={value.title}
                        onPress={() => {
                            this.setState({
                                selectedTab:index
                            })
                        }}
                        selected={this.state.selectedTab == index}
                    >
                        {value.renderContent}
                    </TabBar.Item>)}
                </TabBar>
            </div>
        );
    }
}
