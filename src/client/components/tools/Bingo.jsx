import React, { Component } from 'react';

export default class Bingo extends Component {
    render() {
        return (
          <div>
            <h1 Meeting Bingo></h1>
            <Tiles list={[
              "Tile Text", "Tile Text", "Tile Text", "Tile Text", "Tile Text",
              "Tile Text", "Tile Text", "Tile Text", "Tile Text", "Tile Text",
              "Tile Text", "Tile Text", "Tile Text", "Tile Text", "Tile Text",
              "Tile Text", "Tile Text", "Tile Text", "Tile Text", "Tile Text",
              "Tile Text", "Tile Text", "Tile Text", "Tile Text", "Tile Text",
            ]} />
            
          <button className="btn-full btn-primary btn">Say Bingo</button>
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