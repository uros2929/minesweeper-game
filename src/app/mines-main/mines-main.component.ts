import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mines-main',
  templateUrl: './mines-main.component.html',
  styleUrls: ['./mines-main.component.scss']
})
export class MinesMainComponent implements OnInit {
 
  constructor() { }
 
  minefield={
    rows:[]
    
  }

  ngOnInit() {
    this.createBoard();
    this.placeMineOnSpot();
    console.log(this.minefield)
  }
  
  createBoard(){
    for (let i = 0; i < 5; i++) {
     let row={
       spots:[]
     }
     for (let j = 0; j < 5; j++) {
       let spot={mine:true,content:"noBoom"};
       row.spots.push(spot)
       
     }
      this.minefield.rows.push(row)
     
    }
    return this.minefield
  }
  getSpotOfMineField(){
    let randomNumRow=Math.round(Math.random()*4),
    randomNumCol=Math.round(Math.random()*4);
    return this.minefield.rows[randomNumRow].spots[randomNumCol].content="boom";
  }
  placeMineOnSpot(){
    for (let index = 0; index < 10; index++) {
      this.getSpotOfMineField()
    }
  }
  
}