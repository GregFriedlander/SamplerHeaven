import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SamplerService {

  constructor(private _http: HttpClient) { }

  addUser(userObj){
    return this._http.post('/adduser', userObj);
  }
  loginUser(userObj){
    return this._http.post('/login', userObj);
  }
  getCurrentUser(){
    return this._http.get('/currentuser');
  }
  addSampler(samplerObj){
    return this._http.post('/addsampler', samplerObj);
  }
  getSamplers(){
    return this._http.get('/allsampler');
  }
  addRequest(requestObj){
    return this._http.post('/addrequest', requestObj);
  }
  getRequests(){
    return this._http.get('/allrequests');
  }
  getSingleSampler(samplerID){
    return this._http.get('/getsinglesampler/'+samplerID);
  }
  updateSampler(samplerID, samplerObj){
    return this._http.post('/updatesampler/'+samplerID, samplerObj);
  }
  deleteSampler(samplerID){
    return this._http.post('/deletesampler/'+ samplerID, samplerID);
  }
  deleteRequest(requestID){
    return this._http.post('/deleterequest/'+ requestID, requestID);
  }
  getSingleRequest(requestID){
    return this._http.get('/getsinglerequest/' + requestID);
  }
  updateRequest(requestID, requestObj){
    return this._http.post('/updaterequest/' + requestID, requestObj);
  }

}
