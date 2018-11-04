import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mines-main',
  templateUrl: './mines-main.component.html',
  styleUrls: ['./mines-main.component.scss']
})
export class MinesMainComponent implements OnInit {

  constructor() { }

  minefield = {
    rows: []

  }

  ngOnInit() {
    this.startGame();
    console.log(this.minefield)
  }
  startGame() {
    this.createBoard();
    this.placeMinesOnField();
    this.calAddNum();

  }
  onClick(spot){
    spot.mine=false;
    if(spot.content=="boom"){
      alert('Game over !')
      let potvrda=confirm('Play again ?');
    if (potvrda==true) {
      location.reload()
    }
    }else{
      if (this.playerWon()) {
        alert('YOU WON');
        let potvrda=confirm('Play again ?');
        if (potvrda==true) {
          location.reload()
        }
      }
    }
   
  }
  createBoard() {
    for (let i = 0; i < 9; i++) {
      let row = {
        spots: []
      }
      for (let j = 0; j < 9; j++) {
        let spot = { mine: true, content: "noBoom" };
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
    let randomNumRow = Math.round(Math.random() * 8),
      randomNumColumn = Math.round(Math.random() * 8),
      spotOfMine = this.getSpotOfMineField(randomNumRow, randomNumColumn).content = "boom";
    return spotOfMine;

  }

  placeMinesOnField() {
    for (let index = 0; index < 10; index++) {
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
      if (column < 8) {
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
    if (column < 8) {
      let spot = this.getSpotOfMineField(row, column + 1);
      if (spot.content === "boom") {
        mineNub++;
      }
    }
    if (row < 8) {
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
      if (column < 8) {
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
    for (let c = 0; c < 9; c++) {
      for (let r = 0; r < 9; r++) {
        this.addingNumbers(r, c);
      }
    }
  }
  playerWon(){
    for (let c = 0; c < 9; c++) {
     for (let r = 0; r < 9; r++) {
       let spot=this.getSpotOfMineField(r,c)
       if (spot.mine && spot.content !=="boom") {
         return false
       }
     }
      
    }
    return true
  }

}