import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import './index.css';
import RouteConfig from '../../common/routerconfig';
import RouteWithSubRoute from '../../common/routeWithSubRoutes';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return (
            <Router>
                <div className="home">
                    <Switch>
                        {
                            RouteConfig.map((route,i)=>(
                                <RouteWithSubRoute key={i} {...route}></RouteWithSubRoute>
                            ))
                        }
                        {/* <Route path="/tab" component={FooterNav}></Route>
                        <Route path="/index" render={() => (<div>Index</div>)}></Route> */}
                        <Redirect form="/" to="/tab"></Redirect>
                    </Switch>
                </div>
            </Router>
        )
    }
}


// <div className="home">
// <div className="navWrapper">
//     <div className="navBack"></div>
//     <div className="navTitle">标题一</div>
//     <div className="navEdit"></div>
// </div>
// <div className="content"></div>
// <div className="footerNavWrapper">
//     <div className="footerNavItem footerNavHome active">首页</div>
//     <div className="footerNavItem footerNavCar">车辆管理</div>
//     <div className="footerNavItem footerNavMy">我的</div>
// </div>
// </div>

