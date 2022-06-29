import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state={count:0};
    }

    myFunc=()=>{
        this.state.count<=0?this.setState({count:this.state.count}):this.setState({count:this.state.count-1})
        console.log(this.state.count);
    }
  render() {
    return (
      <div>
    <p>
        <button type="button" className='btn btn-outline lg' onClick={this.myFunc}>-</button>
        <p>State:{this.state.count}</p>
        <button type="button" className='btn btn-outline lg' onClick={()=>this.setState({count:this.state.count+1})}>+</button>
    </p>
      </div>
    )
  }
}

export default ClassCounter