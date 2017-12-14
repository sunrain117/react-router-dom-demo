import React, { Component } from 'react';
import HeaderTitle from '../../../component/headerTitle';

export default class TabMy extends Component {
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
                <HeaderTitle title="我的"></HeaderTitle>
                TabMy</div>
        )
    }
}