import { Component, OnInit } from '@angular/core';
import { SamplerService } from './../sampler.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  currentUser: any = {};
  allRequests: any = [{}];
  errors: any[] = [];

  constructor(private _samplerService: SamplerService, private _router: Router) { }

  ngOnInit() {
    this._samplerService.getCurrentUser()
    .subscribe((data:any)=>{
      console.log('Got current user info');
      this.currentUser = data;
      this._samplerService.getRequests()
      .subscribe((data:any)=>{
        console.log('getting all the requests');
        this.allRequests = data;
      })
    })
  }

  

}
