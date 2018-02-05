import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-browse-dialog',
  templateUrl: './browse-dialog.component.html',
  styleUrls: ['./browse-dialog.component.css']
})
export class BrowseDialogComponent implements OnInit, OnChanges {


  constructor(public dialogRef: MatDialogRef<BrowseDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  

  ngOnInit() {
    
  }
  ngOnChanges() {
    console.log('test console log');
  }

}
