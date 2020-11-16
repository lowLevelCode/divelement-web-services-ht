import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-repositories-list',
  templateUrl: './public-repositories-list.component.html',
  styleUrls: ['./public-repositories-list.component.scss']
})
export class PublicRepositoriesListComponent implements OnInit {

  @Input()
  title:string;
  
  @Input()
  repositories:any[];

  constructor() { }

  ngOnInit(): void {
  }

}
