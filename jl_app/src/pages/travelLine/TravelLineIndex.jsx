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
        map = new window.BMap.Map("container")          // 创建地图实例
        let point = ""  // 创建点坐标
        //获取当前位置
        let geolocation = new window.BMap.Geolocation()
        geolocation.getCurrentPosition(function (r) {
            console.log("定位结果", r)
            console.log("定位结果status", this.getStatus())
            if (this.getStatus() == window.BMAP_STATUS_SUCCESS) {
                point = new window.BMap.Point(r.longitude, r.latitude)  // 创建点坐标
                let mk = new window.BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);

            }
            else {
                console.log("定位失败")
                point = new window.BMap.Point(116.331398, 39.897445)
            }
            map.centerAndZoom(point, 15)
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
        let autoComplate = new window.BMap.Autocomplete(    //建立一个自动完成的对象
            {
                // "input": "新街口",
                // "location": "南京市",
                // "on"
                "input":"1",
                "location":"南京市"
            })
        // let searchResultMap = ""
        // autoComplate.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
        //     console.log("出发地点输入补全:",e)
        //     let _value = e.item.value;
        //     searchResultMap = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        //     ("search-result").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />searchResultMap = " + searchResultMap;
        // })
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