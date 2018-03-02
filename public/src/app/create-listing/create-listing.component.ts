import { Component, OnInit } from '@angular/core';
import { SamplerService } from './../sampler.service';
import { Router } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import * as $ from 'jquery';


@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css']
})
export class CreateListingComponent implements OnInit {

  newSampler: any = {brand: '', model: '', condition: '', price: '', details: '', image: ''};
  errors: any[] = [];

  constructor(private _samplerService: SamplerService, private _router: Router) { }

  ngOnInit() {
  }

  addListing(){
    console.log('hit addListing(): ', this.newSampler);
    this._samplerService.addSampler(this.newSampler)
    .subscribe((data:any)=>{
      console.log('submitted a new sampler, got response from server: ', data);
      if(data.errors != undefined){
        console.log('there were errors');
        this.errors = data;
      }else{
        console.log('posted a new sampler');
        this.newSampler = {brand: '', model: '', condition: '', price: '', details: '', image: ''};
        this._router.navigate(['/home']);
      }
    })
  }

}


    