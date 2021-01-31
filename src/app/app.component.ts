import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'P1';
  startTime:String;
  @ViewChild("page2")
  page2Component:Page2Component;
  @ViewChild("footer")
  footerComponent:FooterComponent;
  updateLastActivity(){
    this.footerComponent.lastUpdatedOn=new Date().toString();
  }

  ngOnInit(){
    this.startTime=new Date().toString();
  }
  incrementVisit(page){
    if(page===2){
    this.page2Component.incrementVisit();
    }
  }
}
