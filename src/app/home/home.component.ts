import { Component, OnInit } from '@angular/core'; 
import { AddSegmentComponent } from '../add-segment/add-segment.component';  
import { MatDialog } from '@angular/material/dialog';
import { Emoji } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { DataServiceService } from '../data-service.service';
import { AddSegment2Component } from '../add-segment2/add-segment2.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public dialog:MatDialog, public seg:DataServiceService) { }
  filterText = '';
  clearFilterText(event: Event) {
    this.filterText = '';
    this.filterGroup(event);
  }
  // Search Functionality
  filterGroup(event:any) {
    const listItem = event.target.closest('.search-container').nextElementSibling.querySelectorAll('.list-item'); 
    listItem.forEach((list:any) => {
      if (list.textContent.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) {
        (list as HTMLElement).style.display = 'flex';
      } else {
        (list as HTMLElement).style.display = 'none';
      }
    });
  }
  addEmoji(event:Event){ 
  }
  addSegmentClick(event:Event):void{
    this.dialog.open(AddSegmentComponent);
  }
  addSegmentClick2(event:Event){
    this.dialog.open(AddSegment2Component);
  }
  segmentList = ['Segment 1','Segment 2','Segment 3','Segment 4','Segment 5'];
  

  ngOnInit(): void { 
  }

}
