import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrls: ['./patients-details.component.css'],
})
export class PatientsDetailsComponent implements OnInit {
  id!: number;
  patient!: Patient;
  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.patient = new Patient();
    this.patientService.getPatientById(this.id).subscribe((data) => {
      this.patient = data;
    });
  }
}
