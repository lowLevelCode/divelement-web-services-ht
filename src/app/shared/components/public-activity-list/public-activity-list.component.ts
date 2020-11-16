import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-activity-list',
  templateUrl: './public-activity-list.component.html',
  styleUrls: ['./public-activity-list.component.scss']
})
export class PublicActivityListComponent implements OnInit {

  @Input()
  title:string;
  
  @Input()
  activities:any[];

  constructor() { }

  ngOnInit(): void {
  }

}
