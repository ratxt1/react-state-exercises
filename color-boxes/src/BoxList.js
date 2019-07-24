import React from 'react';
import './BoxList.css';
import Box from './Box'
import colorsData from './dummyData'

class BoxList extends React.Component {
  static defaultProps = {
    colors: colorsData,
    numBoxes: 10
  }

  constructor(props) {
    super(props);
    this.state = {
      boxColors: Array
        .from({length: this.props.numBoxes})
        .map(c => this.getRandColor())
    }
    this.changeRandBoxColor = this.changeRandBoxColor.bind(this)
  }

  randArrIdx(arr) {
    return Math.floor(Math.random() * arr.length)
  }

  getRandColor() {
    return this.props.colors[this.randArrIdx(this.props.colors)]
  }

  changeRandBoxColor() {
    this.setState((st) => {
      let randColor = this.getRandColor()
      let copyBoxColors = [...st.boxColors]
      copyBoxColors[this.randArrIdx(st.boxColors)] = randColor;
      return  {
        boxColors: copyBoxColors
      }
    })
  }

  render() {
    console.log(this.state.boxColors)
    return (
      <div>
        {this.state.boxColors.map( box => <Box color={box} />)}
        <button onClick={this.changeRandBoxColor}>Change a random box color!</button>
      </div>
    );
  }
}

export default BoxList;