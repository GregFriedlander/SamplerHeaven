import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SamplerService } from './../sampler.service';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {

  sampler = {_id: ''};
  // thisSampler = {};
  updateSampler: any = {brand: '', model: '', condition: '', price: '', details: '', image: ''};
  errors: any[] = [];

  constructor(private _samplerService: SamplerService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      console.log('the _id of the sampler is : ', params.get('id'));
      this.sampler._id = params.get('id');
      this._samplerService.getSingleSampler(this.sampler._id)
      .subscribe((data:any)=>{
        console.log('Finding the Sampler: ', data);
        this.updateSampler = data;
      })
    })
  }

  updateSamplerInfo(samplerID){
    console.log('updateSampler = ', this.updateSampler);
    this._samplerService.updateSampler(samplerID, this.updateSampler)
    .subscribe((data:any)=>{
      console.log('updated a sampler, got a response from server: ', data);
      if(data.errors != undefined){
        console.log('there were errors trying to update');
        this.errors = data;
      }else{
        console.log('updated the sampler');
        // this.updateSampler = {brand: '', model: '', condition: '', price: '', details: '', image: ''};
        this._router.navigate(['/home']);
      }
    })
  }

  deleteSampler(samplerID){
    this._samplerService.deleteSampler(samplerID)
    .subscribe((data:any)=>{
      if(data.errors != undefined){
        console.log('there were errors trying to delete sampler');
        this.errors = data;
      }else{
        console.log('deleted the sampler');
        this._router.navigate(['/home']);
      }
    })
  }

}
