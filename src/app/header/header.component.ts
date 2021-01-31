import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Page2Component } from '../page2/page2.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageRequestNo:number;
  constructor() { }

  @Output()
  pageChangedEvent=new EventEmitter<number>();

 
  ngOnInit(): void {
  }
  pageChangeReq(page:number){
    console.log("Requested Page Number",page);
    this.pageRequestNo=page;
    this.pageChangedEvent.emit(page);
  }
 
}
