import React, { Component } from 'react';


class Display extends Component {
  render(){
  let x = this.props.cnt_heads;
  let y = this.props.cnt_tails;
  let z = x+y;
  
  return (
   <div>
     
    <h3>Out of total {z} outcomes, {x} are heads and {y} are tails</h3>    
    <h4>Current Probability of head = {x/z}</h4>  
    <h4>Current Probability of tail = {y/z}</h4>
     
   </div>
   
  );
  }
}

export default Display;