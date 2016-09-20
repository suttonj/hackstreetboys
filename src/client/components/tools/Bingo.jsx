import React, { Component } from 'react';
import { connect} from 'react-redux';

import { emit } from '../../actionCreators';

const tiles = [
  `customer directed`,
  `paradigm`,
  `touch base`,
  `brainstorm`,
  `scenario`,
  `framework`,
  `in the loop`,
  `win-win`,
  `pivot table`,
  `mindset`,
  `bottom line`,
  `gamify`,
  `growth hack`,
  `delightful`,
  `synergy`,
  `strategic fit`,
];
class Bingo extends Component {

    state = { isActive: false }

    constructor(props) {
      super(props);
      this.sayBingo = this.sayBingo.bind(this);
    }

    sayBingo = () => {
      if (this.state.isActive) {
        emit({ type: `SAY_BINGO`});
      } else {
        this.setState({ isActive: true });
      }
    }

    render() {
        return (
          <div style={{padding:`0 10px`}}>
            <div style={{float:`left`}} onClick={() => this.props.dispatch({ type:`SET_TOOL`, tool: null })}>⇦</div>
            <h1 style={{textAlign:`center`, marginTop:25}}>Meeting Bingo</h1>
            <p style={{textAlign:`center`}}>Fill out the card below as the presenter uses the following phrases. Once you get 4 in a row, you can yell bingo to win!</p>
            <Tiles list={tiles} />
            
          <button className={`btn-full btn-${this.state.isActive ? `primary` : `inactive`} btn`} onClick={this.sayBingo}>Say Bingo</button>
          </div>
        );
    }
}

export default connect()(Bingo);

class Tiles extends Component{
  state = {
    selected: [],
  }

  constructor(props) {
    super(props);
    this.selectTile = this.selectTile.bind(this);
  }

  selectTile = i => {
    const selected = [...this.state.selected];
    selected.push(i);
    this.setState({ selected });
  }

  render() {

      return (
        <div className='board'> 
          {this.props.list.map((listValue, i) => {
            return <div key={i} className={this.state.selected.includes(i) ? `tile tile-selected` : `tile`} onClick={() => this.selectTile(i)} ><span>{listValue}</span></div>;
          })}
        </div>
      )
  }
}