import { Component, OnInit } from '@angular/core';
import { SamplerService } from './../sampler.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MaterializeModule } from 'angular2-materialize';
import { BrowseDialogComponent } from '../browse-dialog/browse-dialog.component';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  currentUser: any = {};
  allSamplers: any = [{}];
  shownSamplers: any = [{}];
  searchTerm: string = '';  
  // selectedSampler: any = {};

  constructor(private _samplerService: SamplerService, public dialog: MatDialog) { }

  ngOnInit() {
    this._samplerService.getSamplers()
      .subscribe((data:any)=>{
        console.log('getting all the samplers: ', data);
        this.allSamplers = data;
        this.shownSamplers = data;
        this._samplerService.getCurrentUser()
        .subscribe((data:any)=>{  
          console.log('Got current user info: ', data);
          this.currentUser = data;
        })
      })
  }

  searchListings(searchTerm){
    this.shownSamplers = this.allSamplers.filter(function(listing){
      console.log('searching listings');
      return listing.brand.toLowerCase().includes(searchTerm.toLowerCase()) || listing.model.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

 

  // openDialog(samplerID){
  //   this._samplerService.getSingleSampler(samplerID)
  //   .subscribe((sampler:any)=>{
  //     console.log('found this sampler: ', sampler);
  //     this.selectedSampler = sampler;
  //     this.dialog.open(BrowseDialogComponent, {
  //       width: '250px',
  //       data: {
  //         brand: 'Akai',
  //       }
  //     });
  //   })
  // };

  // openDialog(){
  //   this.dialog.open(BrowseDialogComponent, {
  //     width: '250px',
  //     data: {
  //       brand: 'Akai',
  //     }
  //   })
  // }


}




      
    
