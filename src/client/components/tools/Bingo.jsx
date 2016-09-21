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

    state = {
      selected: {},
    }

    constructor(props) {
      super(props);
      this.sayBingo = this.sayBingo.bind(this);
      this.allActive = this.allActive.bind(this);
      this.toggleTile = this.toggleTile.bind(this);
      this.state.selected = this.resetTiles();
    }

    resetTiles = () => {
      const selected = {};
      tiles.map((listValue, i) => {
        selected[i] = false;
      });
      return selected;
    }

    toggleTile = i => {
      const toggled = {...this.state.selected, [i]: !this.state.selected[i]};
      this.setState({ selected: toggled });
    }

    sayBingo = () => {
      emit({ type: `SAY_BINGO`});
      this.setState({selected: this.resetTiles()});
    }

    allActive = () => {
      for (var i = 0; i < tiles.length; i++) {
        if (this.state.selected[i] === false)
          return false;
      }
      return true;
    }

    render() {
        return (
          <div style={{padding:`0 10px`}}>
            <h1 style={{textAlign:`center`, marginTop:25}}>
              <a style={{float:`left`}} onClick={() => this.props.dispatch({ type:`SET_TOOL`, tool: null })}>⇦</a>
              Meeting Bingo
            </h1>
            <p style={{textAlign:`center`}}>Fill out the card below as the presenter uses the following phrases. Once you get 4 in a row, you can yell bingo to win!</p>
            <Tiles list={tiles} selected={this.state.selected} toggleTile={this.toggleTile} />
          <button className={`btn-full btn-${this.allActive() ? `primary` : `inactive`} btn`} onClick={this.sayBingo}>Say Bingo</button>
          </div>
        );
    }
}

export default connect()(Bingo);

class Tiles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className='board'> 
          {this.props.list.map((listValue, i) => {
            return <div
                key={i}
                className={this.props.selected[i] ? `tile tile-selected` : `tile`}
                onClick={() => this.props.toggleTile(i)} >
              <span>{listValue}</span>
            </div>;
          })}
        </div>
      )
  }
}