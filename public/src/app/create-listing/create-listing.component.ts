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

  currentUser: any = {};
  newSampler: any = {brand: '', model: '', userEmail: '', condition: '', price: '', details: '', image: ''};
  errors: any[] = [];

  constructor(private _samplerService: SamplerService, private _router: Router) { }

  ngOnInit() {
    this._samplerService.getCurrentUser()
        .subscribe((data:any)=>{  
          console.log('Got current user info on creat page: ', data);
          this.currentUser = data;
        })
  }

  addListing(){
    console.log('hit addListing(): ', this.newSampler);
    this.newSampler.userEmail = this.currentUser.email;
    this._samplerService.addSampler(this.newSampler)
    .subscribe((data:any)=>{
      console.log('submitted a new sampler, got response from server: ', data);
      if(data.errors != undefined){
        console.log('there were errors');
        this.errors = data;
      }else{
        console.log('posted a new sampler');
        this.newSampler = {brand: '', model: '', condition: '', price: '', details: '', image: '', userEmail: ''};
        this._router.navigate(['/home']);
      }
    })
  }

}


    