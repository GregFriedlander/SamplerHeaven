import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseComponent } from './browse/browse.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { RequestListComponent } from './request-list/request-list.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { SamplerPageComponent } from './sampler-page/sampler-page.component';
 
const routes: Routes = [
  {
    path: '',
    component: LoginRegComponent
  },
  {
    path: 'home',
    component: BrowseComponent
  },
  {
    path: 'create/listing',
    component: CreateListingComponent
  },
  {
    path: 'requests',
    component: RequestListComponent
  },
  {
    path: 'requests/new',
    component: CreateRequestComponent
  },
  {
    path: 'edit/:id',
    component: EditListingComponent
  },
  {
    path: 'requests/edit/:id',
    component: EditRequestComponent
  },
  {
    path: 'sampler/:id',
    component: SamplerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
