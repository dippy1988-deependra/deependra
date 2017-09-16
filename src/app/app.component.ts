import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app works!';
  items:any=[];
  sidebar_menu:any=[];

  constructor(){}
  ngOnInit(){
    this.items=[
      {name:'Nitin',address:'Gaziabad'},
      {name:'Deependra',address:'gaziabad'},
      {name:'Gaurav',address:'gaziabad'},
      {name:'Jitender',address:'gaziabad'},
      {name:'Nitin',address:'Gaziabad'},
      {name:'Deependra',address:'gaziabad'},
      {name:'Gaurav',address:'gaziabad'},
      {name:'Jitender',address:'gaziabad'},
      {name:'nitin',address:'gaziabad'}
    ];
    this.sidebar_menu=[
      {menu:'DASHBOARD'},
      {menu:'REPORTS'},
      {menu:'APPUSER'},
      {menu:'ADMINISTRATION'},
      {menu:'BROADCAST MESSAGE'},
      {menu:'LOG'},
      {menu:'VERIFICATION REQUEST'},
      {menu:'LOGOUT'}
    ]
  }
  myEvent(event) {
    alert('working');
  }
}
