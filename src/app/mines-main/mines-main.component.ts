import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mines-main',
  templateUrl: './mines-main.component.html',
  styleUrls: ['./mines-main.component.scss']
})
export class MinesMainComponent implements OnInit {

  constructor() { }
  rows=[];
  randomNumRow = Math.round(Math.random() * 8);
  randomNumCol = Math.round(Math.random() * 8);
  mineFieldRow = Object.keys(this.createBoard());
  mineFieldCol = this.createBoardCol();


  ngOnInit() {
 
  }

  createBoard() {
    for (let i = 0; i < 9; i++) {
      let row = {
        spots: []
      };
      for (let y = 0; y < 9; y++) {
        let spot = {};
        row.spots.push(spot)
      }
      this.rows.push(row)
    }
    return this.rows;


  }
  createBoardCol() {
    for (let index = 0; index < 9; index++) {
      return this.createBoard()[index].spots
    }
  }

  fieldClick(event) {
    event.preventDefault();
    event.target.parentElement.innerHTML = `<img _ngcontent-c1="" alt="" src="empty.png">`
    console.log(event)
  }

  // putRandomMine() {
  //   this.rows[this.randomNumRow].spots[this.randomNumCol] = "mine";
  //   console.log(this.rows)
  // }
  // putManyMines(){
  //   for (let index = 0; index < 10; index++) {
  //     this.putRandomMine();
  //     console.log(this.rows)
  //   }
  //}
}

