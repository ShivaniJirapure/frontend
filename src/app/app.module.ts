import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    DoctorDetailsComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
    PatientsDetailsComponent,
    PatientSearchComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
