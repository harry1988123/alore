import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { DataServiceService } from '../data-service.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-add-segment2',
  templateUrl: './add-segment2.component.html',
  styleUrls: ['./add-segment2.component.scss']
})
export class AddSegment2Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<HomeComponent>,public seg:DataServiceService) { }
  name:any;
  emoji:any;
  desc:any;
  @ViewChild('segmentForm') segmentForm!: NgForm;
  ngOnInit(): void {
  }
  cancelClick(event:Event){
    event.stopPropagation();
    this.dialogRef.close();
  }
  submitClick(event:Event){
    console.log(this.segmentForm);
    let temp = {'emoji':this.emoji,'segmentName':'Hello'};
    this.seg.segmentListOne.push(temp);
    console.log(event);
    
    event.stopPropagation();
  }
  onSubmitForm(event:Event){
    console.log(this.name);
    console.log(this.emoji);
    console.log(this.desc);
    console.log(this.segmentForm);    
  }
  addEmoji(event:EmojiComponent){
    console.log(event.emoji);
  }

}
