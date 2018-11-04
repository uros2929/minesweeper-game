/// Because of localhost config game is disabled! ///

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mines-main',
  templateUrl: './mines-main.component.html',
  styleUrls: ['./mines-main.component.scss']
})
export class MinesMainComponent implements OnInit {

  constructor() { }

  // configArray = [9,9,25];
  minefield = {
    rows: []

  }

  ngOnInit() {
    this.startGame();
    console.log(this.minefield)
  }
  // configGame(event) {
  //   event.preventDefault();
  //   let configRows = event.target[0].value,
  //       configColums = event.target[1].value,
  //       configMines = event.target[2].value;
  //   this.configArray.push(configRows,configColums,configMines);

  // }
  startGame() {
    // if (this.configArray.length===0) {
    //   return;
    // }
    this.createBoard();
    this.placeMinesOnField();
    this.calAddNum();

  }

  onClick(spot) {
    spot.mine = false;
    if (spot.content == "boom") {
      document.getElementById('gameOver').style.display = "table";
    } else {
      if (this.playerWon()) {
        document.getElementById('youWon').style.display = "table"
      }
    }

  }
  markMine(event,spot) {
    event.preventDefault();
   spot.flag=false;
 
  }
  createBoard() {
    for (let i = 0; i < 10; i++) {
      let row = {
        spots: []
      }
      for (let j = 0; j < 10; j++) {
        let spot = { 
          mine: true, 
          content: "noBoom",
          flag: true 
        };
        row.spots.push(spot)

      }
      this.minefield.rows.push(row)

    }

    return this.minefield
  }
  getSpotOfMineField(row, column) {
    return this.minefield.rows[row].spots[column];
  }
  placeMineOnSpot() {
    let randomNumRow = Math.round(Math.random() * 9),
      randomNumColumn = Math.round(Math.random() * 9),
      spotOfMine = this.getSpotOfMineField(randomNumRow, randomNumColumn).content = "boom";
    return spotOfMine;

  }

  placeMinesOnField() {
    for (let index = 0; index < 25; index++) {
      this.placeMineOnSpot()
    }
  }

  addingNumbers(row, column) {
    let thisSpot = this.minefield.rows[row].spots[column];
    if (thisSpot.content === "boom") {
      return;
    }
    let mineNub = 0

    if (row > 0) {
      if (column > 0) {
        let spot = this.getSpotOfMineField(row - 1, column - 1)
        if (spot.content === "boom") {
          mineNub++;
        }
      }
      let spot = this.getSpotOfMineField(row - 1, column)
      if (spot.content === "boom") {
        mineNub++;
      }
      if (column < 9) {
        let spot = this.getSpotOfMineField(row - 1, column + 1)
        if (spot.content === "boom") {
          mineNub++;
        }
      }
    }

    if (column > 0) {
      let spot = this.getSpotOfMineField(row, column - 1);
      if (spot.content === "boom") {
        mineNub++
      }
    }
    if (column < 9) {
      let spot = this.getSpotOfMineField(row, column + 1);
      if (spot.content === "boom") {
        mineNub++;
      }
    }
    if (row < 9) {
      if (column > 0) {
        let spot = this.getSpotOfMineField(row + 1, column - 1)
        if (spot.content === "boom") {
          mineNub++;
        }
      }
      let spot = this.getSpotOfMineField(row + 1, column);
      if (spot.content === "boom") {
        mineNub++;
      }
      if (column < 9) {
        let spot = this.getSpotOfMineField(row + 1, column + 1)
        if (spot.content === "boom") {
          mineNub++;
        }
      }
    }

    if (mineNub > 0) {
      thisSpot.content = mineNub;
    }
  }

  calAddNum() {
    for (let c = 0; c < 10; c++) {
      for (let r = 0; r < 10; r++) {
        this.addingNumbers(r, c);
      }
    }
  }
  playerWon() {
    for (let c = 0; c < 10; c++) {
      for (let r = 0; r < 10; r++) {
        let spot = this.getSpotOfMineField(r, c)
        if (spot.mine && spot.content !== "boom") {
          return false
        }
      }

    }
    return true
  }
  playAgain() {
    location.reload();
  }
}