import React, {Component} from 'react'
import {Grid,Row,Col} from 'antd'
export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "",       //当前城市
            count: 1,       //来当前城市的次数，接口返回
            temperature:"",  //温度
            weather:""      //天气
        }
    }

    componentDidMount() {
        this.getCurrentLocation();
    }

    getCurrentLocation = () => {
        // var map = new window.AMap.Map('container', {
        //     resizeEnable: true
        // })
        let self = this
        window.AMap.plugin('AMap.CitySearch', function () {
            let citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    console.log("result", result)
                    self.setState({
                        city: result.city
                    })
                    self.getCurrentWeather(result.city)
                }
            })
        })
    }
    //获取天气
    getCurrentWeather = (city) => {
        let self = this
        window.AMap.plugin('AMap.Weather', function() {
            //创建天气查询实例
            let weather = new window.AMap.Weather()
            //执行实时天气信息查询
            weather.getLive(city, function(err, data) {
                console.log(err, data)
                self.setState({
                    temperature:data.temperature,
                    weather:data.weather
                })
            })
        })
    }

    render() {
        const {city,count,temperature,weather} = this.state
        return (
            <div>
                <Row>
                    <Col span={9} >
                        {city != "" ? `欢迎您第${count}次来到${city}!` : "不好意思啦~小D没有定位到您的位置"}
                    </Col>
                    <Col span={4}
                         offset={3}>
                        {`温度：${temperature}`}
                    </Col>
                    <Col span={4}
                        offset={3}>
                        {`天气：${weather}`}
                    </Col>
                </Row>
            </div>

        )
    }
}