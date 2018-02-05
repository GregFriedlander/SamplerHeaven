import { Component, OnInit } from '@angular/core';
import { SamplerService } from './../sampler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  newRequest: any = {brand: '', model: '', condition: '', details: '', minPrice: '', maxPrice: ''};
  errors: any[] = [];

  constructor(private _samplerService: SamplerService, private _router: Router) { }

  ngOnInit() {
  }

  addRequest(){
    console.log('hit addRequest(): ', this.newRequest);
    this._samplerService.addRequest(this.newRequest)
    .subscribe((data:any)=>{
      console.log('submitted new request, server: ', data);
      if(data.errors != undefined){
        console.log('there were errors');
        this.errors = data;
      }else{
        console.log('posted a new request');
        this.newRequest = {brand: '', model: '', condition: '', details: '', minPrice: '', maxPrice: ''};
        this._router.navigate(['/requests']);
      }
    })
  }

}
