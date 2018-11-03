import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mines-main',
  templateUrl: './mines-main.component.html',
  styleUrls: ['./mines-main.component.scss']
})
export class MinesMainComponent implements OnInit {

  constructor() { }
  mineFieldRow = Object.keys(this.createBoard());
  mineFieldCol=this.createBoardCol();
  ngOnInit() {
 
  }

  createBoard() {
    let rows = []
    for (let i = 0; i < 9; i++) {
      let row = {
        spots: []
      };
      for (let y = 0; y < 9; y++) {
        let spot = {};
        spot=false;
        row.spots.push(spot)
      }
      rows.push(row)
    }
    return rows;


  }
  createBoardCol(){
    for (let index = 0; index < 9; index++) {
     return this.createBoard()[index].spots
    }
  }

  fieldClick(event){
    event.preventDefault();
    event.target.innerText="true"
console.log(event)
  }

}
