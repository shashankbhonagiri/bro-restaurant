import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { createIncrementalCompilerHost, createIncrementalProgram } from 'typescript';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemCount =0;
  constructor() { }

  ngOnInit(): void {
  }


  
  incrementOrder() {
    console.log('increment called');
    this.itemCount++;
  }
  decrementOrder() {
    this.itemCount--;
  }
}
 