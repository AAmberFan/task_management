import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  items:any[] = [];

  constructor() { }

  ngOnInit() {
    this.getItems();
  }
  getItems(){
    for (let i = 1; i < 15; i++) {
      this.items.push(`item${i}`);
      
    }
    console.log(this.items);
  }
}
