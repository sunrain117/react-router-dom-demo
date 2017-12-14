import React,{Component} from 'react';
import HeaderTitle from '../../../component/headerTitle';

export default class TabManager extends Component{
    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }

    render(){
        return(
        <div style={{
            display: 'flex',
            flex:1,
           flexDirection: 'column',
         }}>
         <HeaderTitle title="车辆管理"></HeaderTitle>
            TabManager
        </div>)
    }
}