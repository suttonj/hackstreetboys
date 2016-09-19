import React, { Component } from 'react';

export default class Bingo extends Component {
    render() {
        return (
          <div>
            <Tiles list={[
              "Tile Text", "Tile Text", "Tile Text", "Tile Text", "Tile Text",
              "Tile Text", "Tile Text", "Tile Text", "Tile Text", "Tile Text",
              "Tile Text", "Tile Text", "Tile Text", "Tile Text", "Tile Text",
              "Tile Text", "Tile Text", "Tile Text", "Tile Text", "Tile Text",
              "Tile Text", "Tile Text", "Tile Text", "Tile Text", "Tile Text",
            ]} />
          </div>
        );
    }
}

class Tiles extends Component{
  render() {
      return (
        <div className='board'> 
          {this.props.list.map(listValue => {
            return <div className="tile"><span>{listValue}</span></div>;
          })}
        </div>
      )
  }
}