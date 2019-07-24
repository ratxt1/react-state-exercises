import React from 'react';
import './Coin.css';

class Coin extends React.Component {
  static defaultProps = {
    headsImg: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png',
    tailsImg: "http://upload.wikimedia.org/wikipedia/commons/7/79/Dime_Reverse_13.png"
  }
 

render(){
  const {flipState, headsImg, tailsImg} = this.props
  let imgSrc;
  if (flipState === 'heads') {
    imgSrc = headsImg;
  } 
  else if (flipState === 'tails'){
    imgSrc = tailsImg;
  } else imgSrc = '';

  return(
    <div>
      <img src={imgSrc}></img>
    </div>

  )
}
}
export default Coin;