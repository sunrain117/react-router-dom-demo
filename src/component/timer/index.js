import React,{Component} from 'react';

export default class TimerControl extends Component{
    constructor(props){
        super(props);
        this.state={
            secondsElapsed:0
        }
    }

    tick(){
        this.setState({secondsElapsed:this.state.secondsElapsed+1});
    }

    componentDidMount(){
        this.interval=setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount(){
        this.interval && clearInterval(this.interval);
    }
    render(){
        return <div style={{padding:10}}>
            seconds Elapsed:{this.state.secondsElapsed}
        </div>
    }
}