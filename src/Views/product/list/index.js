import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import HeaderTitle from '../../../component/headerTitle';


export default class ProductList extends Component{
    constructor(props){
        super(props);
        console.log('productList',this.props);
    }
    componentDidMount(){

    }
    render(){
        var {state,search}=this.props.location;
        return(
            <div style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
            }}>
              <HeaderTitle leftTitle="返回" title="产品列表"  {...this.props}></HeaderTitle>
                ProductList
                <br/>
                传入的参数：
                <ul>
                    <li>tk:{state.tk}</li>
                    <li>search:{search}</li>
                </ul>
                <div>
                <Link to="/product/23432">点击进入详情：</Link>
                </div>
            </div>
        )
    }
}