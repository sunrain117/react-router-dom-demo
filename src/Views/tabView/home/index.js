import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import HeaderTitle from '../../../component/headerTitle';

export default class TabHome extends Component{
    constructor(props){
        super(props);
        console.log('tabHome',this.props.match);
    }
    render(){
        return(
            <div className="container">
                <HeaderTitle title="首页"></HeaderTitle>
               TabHome <br/> <Link to={{pathname:'/product',search:"?sort=name",state:{tk:'123'}}}>产品列表</Link>
            </div>
        )
    }
}