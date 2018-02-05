import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import * as $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(document).ready(function(){
    //   $(".button-collapse").sideNav();
    //   $(".dropdown-button").dropdown();

    // })
  }

}
