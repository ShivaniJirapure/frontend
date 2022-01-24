import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';

const routes: Routes = [
  { path: 'doctors', component: DoctorListComponent },
  { path: 'create-doctor', component: CreateDoctorComponent },
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'doctor-details/:id', component: DoctorDetailsComponent },
  { path: 'create-patient', component: CreatePatientComponent },
  { path: 'patient-details/:id', component: PatientsDetailsComponent },
  { path: 'search', component: PatientSearchComponent },
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
