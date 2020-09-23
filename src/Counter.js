import React from 'react'

class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    incrementer(){
        this.setState({
            count:this.state.count+1
        });
    }
    render(){
    return(<div><h1>{this.state.count}</h1><button onClick={()=>this.incrementer}>Increment!</button></div>);
    }
}

export default Counter;