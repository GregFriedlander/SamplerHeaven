import { Component, OnInit } from '@angular/core';
import { SamplerService } from './../sampler.service';
import { MaterializeModule } from 'angular2-materialize';
// import { BrowseDialogComponent } from '../browse-dialog/browse-dialog.component';

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
  switch: boolean = true;
  switch2: boolean = true;
  switch3: boolean = true;

  samplerBrands: any = [];

  constructor(private _samplerService: SamplerService) { }

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
          // ADDED FROM HERE DOWN 
          this._samplerService.getSamplerBrands()
          .subscribe((data:any)=>{
            console.log('Got sampler brands: ', data);
            this.samplerBrands = data;
          })
        })
      })
  }

  searchListings(searchTerm){
    this.shownSamplers = this.allSamplers.filter(function(listing){
      console.log('searching listings');
      return listing.brand.toLowerCase().includes(searchTerm.toLowerCase()) || listing.model.toLowerCase().includes(searchTerm.toLowerCase()) || listing.condition.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

  toggleBrands(){
    if(this.switch == false){
      this.switch = true;
    }else if(this.switch == true){
      this.switch = false;
      this.switch2 = true;
      this.switch3 = true;
    }
  }
  togglePrices(){
    if(this.switch2 == false){
      this.switch2 = true;
    }else if(this.switch2 == true){
      this.switch2 = false;
      this.switch = true;
      this.switch3 = true;
    }
  }
  toggleCondition(){
    if(this.switch3 == false){
      this.switch3 = true;
    }else if(this.switch3 == true){
      this.switch3 = false;
      this.switch = true;
      this.switch2 = true;
    }
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




      
    
