import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.sass']
})
export class PipeExampleComponent implements OnInit {

  public Title;
  public filtervalue='';
  public birthday;
  public list=[];
  public Name='';
  toggle = true; // start with true == shortDate

  constructor() { }

  ngOnInit() {
    this.list=[
      {name:'a', canFly: true},
      {name:'z', canFly: false},
      {name:'c', canFly: true},
      {name:'d', canFly: false},
      {name:'n', canFly: true},
      {name:'f', canFly: true},
      {name:'y', canFly: false}

    ]
    this.Title = "Wel-Come"
    this.birthday = new Date(1991,0,17)
    console.log(this.list.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    }));
  }
  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  
 
  toggleFormat(){
    this.toggle = !this.toggle;
  }

}
