import React, { Component } from 'react';

export default class Bingo extends Component {
    render() {
        return (
          <div class="board">
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
        <div class='tiles'> 
          {this.props.list.map(listValue => {
            return <div class="tile"><span>{listValue}</span></div>;
          })}
        </div>
      )
  }
}