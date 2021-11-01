import React, { Component } from 'react';
import Display from './Display';
import './Coinlogic.css';
import head from './head.jpg';
import tail from './tail.jpg';

class Coinlogic extends Component {
  constructor(props){
    super(props);
    this.state={
      no_of_heads:0,
      no_of_tails:0,
      is_flipping:false,
      face:head
    };
    this.handlecoin=this.handlecoin.bind(this);
  }

  handlecoin(e){
    let arr=[head, tail];
    let x = Math.floor(Math.random()*2);
    let curr_heads = this.state.no_of_heads;
    let curr_tails = this.state.no_of_tails;
    let curr_face = arr[x];
    if (x===0)
      curr_heads++;
    else 
      curr_tails++;

    
    this.setState({
        no_of_heads:curr_heads,
        no_of_tails:curr_tails,
        is_flipping:true,
        face:curr_face
      });
    
    setTimeout(
      ()=>{this.setState({is_flipping:false});},
      1000
    );

  }
  render(){
  let test = this.state.is_flipping;
  return (
   <div>

      {test? <h2>Flipping...</h2>: <img alt="Loading" src={this.state.face}></img>}

      {test? <p></p> : <Display cnt_heads={this.state.no_of_heads}  cnt_tails={this.state.no_of_tails}/>}
      
      <button onClick={this.handlecoin} disabled={test}>Flip the coin</button>
     
   </div>
   
  );
  }
}

export default Coinlogic;