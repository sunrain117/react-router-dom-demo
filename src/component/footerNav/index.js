
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RouteWithSubRoute from '../../common/routeWithSubRoutes';
import './index.css';

export default class FooterNav extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.routes)
    }
    render() {
        return (
            <div className="footerContainer">
                <div className="content">
                    {this.props.routes.map((route,i)=>(
                        <RouteWithSubRoute key={i} {...route}></RouteWithSubRoute>
                    ))}
                        {/* <Route exact path="/tab" render={() => (<div>
                            Home
                        <Link to="/product">进入新干起</Link>
                        </div>)}></Route>
                        <Route exact={true} strict={true} path="/tab/manage" render={() => (<div>Managr</div>)}></Route>
                        <Route exact={true} strict={true} path="/tab/my" render={() => (<div>My</div>)}></Route> */}

                </div>
                <div className="footerNavWrapper">
                    <NavLink exact to={`${this.props.match.url}`} className="footerNavItem footerNavHome " activeClassName="active">首页</NavLink>
                    <NavLink to={`${this.props.match.url}/manage`} className="footerNavItem footerNavCar" activeClassName="active">车辆管理</NavLink>
                    <NavLink to={`${this.props.match.url}/my`} className="footerNavItem footerNavMy" activeClassName="active">我的</NavLink>
                </div>
            </div>
        )
    }
}