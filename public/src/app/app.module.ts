import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import 'materialize-css';
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

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: []
})
export class DemoMaterialModule {}

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
    SamplerPageComponent
  ],
  entryComponents:[BrowseDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule
  ],
  providers: [SamplerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
