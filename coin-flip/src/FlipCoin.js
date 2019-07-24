import React from 'react';
import Coin from './Coin'
import './FlipCoin.css';

class FlipCoin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heads: 0,
      tails: 0,
      flips: 0,
      flipState: ""
    }
    this.handleFlip = this.handleFlip.bind(this)
  }
  flipCoin(){
    let faces = ['heads', 'tails'];
    let idx = Math.floor(Math.random() * 2)
    return faces[idx];
  }

  handleFlip(){
    let randoState = this.flipCoin();
    this.setState(st => {
      if(randoState === 'heads'){
        return { 
          heads: st.heads + 1,
          tails: st.tails,
          flips: st.flips + 1,
          flipState: "heads"
        }
      }else{
        return { 
          heads: st.heads,
          tails: st.tails + 1,
          flips: st.flips + 1,
          flipState: "tails"
        }
      }
    })
  }
  render() {
    let {heads, tails, flips, flipState} = this.state
    return (<div>
       <Coin flipState={flipState}/>
       <button onClick={this.handleFlip}>FLIP MEEE</button>
       <p> Out of {flips}, there have been {heads} heads and {tails} tails.</p>
       </div>
    )
  }
}



export default FlipCoin;
