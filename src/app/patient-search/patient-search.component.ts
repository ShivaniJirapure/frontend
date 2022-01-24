import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css'],
})
export class PatientSearchComponent implements OnInit {
  searchText: any;
  patient!: Patient[];

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients() {
    this.patientService.getPatientList().subscribe((data) => {
      this.patient = data;
    });
  }

  patientDetails(id: number) {
    this.router.navigate(['patient-details', id]);
  }

  updatePatient(id: number) {
    this.router.navigate(['update-patient', id]);
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe((data) => {
      console.log(data);
      this.getPatients();
    });
  }
}
