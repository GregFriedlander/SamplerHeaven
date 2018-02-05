import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SamplerService } from './../sampler.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {

  request = {_id: ''};
  // thisRequest = {};
  updateRequest: any = {brand: '', model: '', condition: '', details: '', minPrice: '', maxPrice: ''};
  errors: any[] = [];

  constructor(private _samplerService: SamplerService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      console.log('the _id of the request is : ', params.get('id'));
      this.request._id = params.get('id');
      this._samplerService.getSingleRequest(this.request._id)
      .subscribe((data:any)=>{
        console.log('Finding the Request: ', data);
        this.updateRequest = data;
      })
    })
  }

  updateRequestInfo(requestID){
    this._samplerService.updateRequest(requestID, this.updateRequest)
    .subscribe((data:any)=>{
      console.log('updated a request, got a response from server: ', data);
      if(data.errors != undefined){
        console.log('there were errors trying to update');
        this.errors = data;
      }else{
        console.log('updated the request');
        // this.updateSampler = {brand: '', model: '', condition: '', price: '', details: '', image: ''};
        this._router.navigate(['/requests']);
      }
    })
  }

  deleteRequest(requestID){
    this._samplerService.deleteRequest(requestID)
    .subscribe((data:any)=>{
      if(data.errors != undefined){
        console.log('there were errors trying to delete request');
        this.errors = data;
      }else{
        console.log('deleted the request');
        this._router.navigate(['/requests']);
      }
    })
  }

}
