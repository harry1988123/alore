import { Component, Inject, OnInit, ViewChild } from '@angular/core'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgForm } from '@angular/forms';
import { EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { DataServiceService } from '../data-service.service';




@Component({
  selector: 'app-add-segment',
  templateUrl: './add-segment.component.html',
  styleUrls: ['./add-segment.component.scss']
})
export class AddSegmentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public popupData:any, private seg:DataServiceService) { }

   
  name:any;
  emoji:any;
  desc:any;
  @ViewChild('segmentForm') segmentForm!: NgForm;
  ngOnInit(): void {
    console.log(this.popupData);    
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
