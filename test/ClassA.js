import React, { Component } from 'react'

export default class ClassA extends Component {
    constructor(props){
      console.log("constructor");
        super(props);
        this.state={
            name:"Honey",
            company:"expandimo"
        };
    }
    myFunc=()=>{
        this.setState({
            name:"Balmeet",
            location:"mohali"
        });
    }
    componentDidMount(){
        // this.setState({
        //     name:"varun"
        // })
        console.log("didmounted");
    }
    // shouldComponentUpdate(){
    //   console.log("should");
    //     return true
    // }
    componentDidUpdate(){
        // this.setState({
        //     name:"swapan"
        // })
        console.log("update");
    }
    // componentWillUnmount(){
    //     console.log("unmounted");
    // }

  render() {
    console.log("render");
    // console.log(this.state.name);
    return (
      <div>{console.log("return")}
      <p>hello {this.props.name}</p>
      <p>{this.state.name}</p>
      <button onClick={this.myFunc}>click here to change the state:{this.state.name}</button>
      <button onClick={this.componentWillUnmount}>unmount</button>
      </div>
    )
  }
}
