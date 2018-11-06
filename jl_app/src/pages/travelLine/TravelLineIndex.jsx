import React, {Component} from 'react'
import {SearchBar, Button, WhiteSpace} from 'antd-mobile';
import './TravelLineIndex.css'

let startPosition = ""
let endPosition = ""
let map = ""
export default class TravelLineIndex extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        buttonDisabled: true,
        startPositionValue: startPosition,
        endPositionValue: endPosition
    };

    componentDidMount() {
        map = new window.AMap.Map('container')        // 创建地图实例
        map.plugin('AMap.Geolocation', function() {
            var geolocation = new window.AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                buttonOffset: new window.AMap.Pixel(10, 20),
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                zoomToAccuracy: true,
                //  定位按钮的排放位置,  RB表示右下
                buttonPosition: 'RB'
            })

            geolocation.getCurrentPosition()
            window.AMap.event.addListener(geolocation, 'complete', onComplete)
            window.AMap.event.addListener(geolocation, 'error', onError)

            function onComplete (data) {
                // data是具体的定位信息
                console.log("定位成功",data)
                let lng = data.position.lng
                let lat = data.position.lat
                map = new window.AMap.Map('container', {
                    center:[lng,lat],
                    zoom:16
                })
            }

            function onError (data) {
                // 定位出错
                console.log("定位失败",data)
                map = new window.AMap.Map('container', {
                    center:[118.71751,31.96284],
                    zoom:16
                })
            }
        })
    }

    searchChangeCurrpos = (value) => {
        console.log("searchChangeCurrpos", value)
        startPosition = value
        this.setState({
            startPositionValue: value
        })
        if (startPosition != "" && endPosition != "") {
            this.setState({
                buttonDisabled: false
            })
        }
        //输入自动补全
    }
    onSearchComplete = () => {
        console.log("onSearchComplete")
    }
    searchChangeDespos = (value) => {
        console.log("searchChangeDespos", value)
        endPosition = value
        this.setState({
            endPositionValue: value
        })
        if (startPosition != "" && endPosition != "") {
            this.setState({
                buttonDisabled: false
            })
        }
    }
    clear = () => {

    }

    handleClick = () => {
        // this.manualFocusInst.focus();
    }
    queryLine = () => {
        console.log("queryLine")
    }
    changePosition = () => {
        console.log("changePosition")
        const tempStart = startPosition
        startPosition = endPosition
        endPosition = tempStart
        this.setState({
            startPositionValue: startPosition,
            endPositionValue: endPosition
        })
    }

    render() {
        return (<div>
            <SearchBar value={this.state.startPositionValue} placeholder="请输入起点" maxLength={8}
                       onChange={this.searchChangeCurrpos}/>
            <img className="change_position" src={require('./img/shift.png')} onClick={this.changePosition}/>
            <SearchBar value={this.state.endPositionValue} placeholder="请输入终点" maxLength={8}
                       onChange={this.searchChangeDespos}/>
            <WhiteSpace/>
            <Button className="button_class" type="primary" disabled={this.state.buttonDisabled}
                    onClick={this.queryLine}>查询</Button>
            <div id="container" style={{width: "100%", height: document.documentElement.clientHeight - 239}}></div>
            <div id="search-result" style={{display: "none", border: '1px solid #C0C0C0', height: 'auto',width:'150px'}}></div>
        </div>)
    }
}