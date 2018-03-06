import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { BrowseComponent } from './browse/browse.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { RequestListComponent } from './request-list/request-list.component';
import { CreateRequestComponent } from './create-request/create-request.component';

import { SamplerService } from './sampler.service';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { BrowseDialogComponent } from './browse-dialog/browse-dialog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SamplerPageComponent } from './sampler-page/sampler-page.component';
import { LandingComponent } from './landing/landing.component';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    BrowseComponent,
    CreateListingComponent,
    RequestListComponent,
    CreateRequestComponent,
    EditListingComponent,
    EditRequestComponent,
    BrowseDialogComponent,
    NavigationComponent,
    SamplerPageComponent,
    LandingComponent
  ],
  entryComponents:[BrowseDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // DemoMaterialModule,
    // MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule,
    Ng2OrderModule
  ],
  providers: [SamplerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
