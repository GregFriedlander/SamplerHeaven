import { Component, OnInit } from '@angular/core';
import { SamplerService } from './../sampler.service';
import { ActivatedRoute } from '@angular/router'
import { MaterializeModule } from 'angular2-materialize';

@Component({
  selector: 'app-sampler-page',
  templateUrl: './sampler-page.component.html',
  styleUrls: ['./sampler-page.component.css']
})
export class SamplerPageComponent implements OnInit {

  sampler = {_id: ''};
  thisSampler: any = {brand: '', model: '', condition: '', price: '', details: '', image: ''};

  constructor(private _samplerService: SamplerService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      console.log('the _id of the sampler is : ', params.get('id'));
      this.sampler._id = params.get('id');
      this._samplerService.getSingleSampler(this.sampler._id)
      .subscribe((data:any)=>{
        console.log('Finding the Sampler: ', data);
        this.thisSampler = data;
      })
    })
  }

}
