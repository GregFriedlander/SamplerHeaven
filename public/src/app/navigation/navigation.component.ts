import { Component, OnInit } from '@angular/core';
import { SamplerService } from './../sampler.service';

import { MaterializeModule } from 'angular2-materialize';
// import * as $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  currentUser: any = {};
  // ckals;kdja
  constructor(private _samplerService: SamplerService) { }

  

  ngOnInit() {
    this._samplerService.getCurrentUser()
        .subscribe((data:any)=>{  
          console.log('Got current user info: ', data);
          this.currentUser = data;
  }

}
