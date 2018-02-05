import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SamplerService } from './../sampler.service';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {

  newUser: any = {first_name: '', last_name: '', email: '', password: '', passwordComfirm: '', state: ''};
  user: any = {email: "", password: ""};
  errors: any[] = [];
  states: any[] = [ "AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];

  constructor(private _samplerService: SamplerService, private _router: Router) { }

  ngOnInit() {
  }

  register(){
    this._samplerService.addUser(this.newUser)
    .subscribe((data:any)=>{
      console.log('register() got a response from the server: ', data)
      if(data.errors != undefined){
        console.log("There were validation errors");
        this.errors = data;
      }else{
        console.log('added user, redirection');
        this._router.navigate(['/home']);
      }
    })
  }

  login(){
    this._samplerService.loginUser(this.user)
    .subscribe((data:any)=>{
      console.log("login() got a response from the server: ", data);
      if(data.errors != undefined || data.message == 'invalid'){
        this.errors = data;
      }else{
        console.log("logged in user, redirecting");
        this._router.navigate(['/home']);
      }
    })
  }



}
