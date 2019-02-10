import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'Amber'
    },
    {
      id: 2,
      name: 'Bob'
    },
    {
      id: 3,
      name: 'Candy'
    }
  ];

  displayUser(user: {id: string; name: string}){
    return user? user.name : '';
  }
  constructor() { }

  ngOnInit() {
  }

}
