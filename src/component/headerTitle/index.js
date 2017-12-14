import React, { Component } from 'react';
import './index.css';
export default class HeaderBar extends Component {
    static defaultProps={
        title:'标题1'
    }
    constructor(props){
        super(props);
        this.state={}
    }
    leftClick=(e)=>{
        e.preventDefault();
        this.props.history && this.props.history.goBack();
    }
    render() {
        var leftUI=null;
        if(!this.props.leftTitle){
            leftUI=<div className="navBack"></div>;
        }else{
            leftUI=<div className="navBack" onClick={this.leftClick.bind(this)}>{this.props.leftTitle}</div>
        }
        return (
            <div className="navWrapper">
                {leftUI}
                <div className="navTitle">{this.props.title}</div>
                <div className="navEdit"></div>
            </div>
        )
    }
}