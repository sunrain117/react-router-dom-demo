import React, { Component } from 'react';
import HeaderTitle from '../../../component/headerTitle';


export default class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
            }}>
            <HeaderTitle leftTitle="返回" title="产品详情" {...this.props}></HeaderTitle>
                详情页:match.params.id:{this.props.match.params.id}
            </div>
        )
    }
}