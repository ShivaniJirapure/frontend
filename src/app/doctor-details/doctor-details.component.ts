import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'],
})
export class DoctorDetailsComponent implements OnInit {
  id!: number;
  doctor!: Doctor;
  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.doctor = new Doctor();
    this.doctorService.getDoctorById(this.id).subscribe((data) => {
      this.doctor = data;
    });
  }
}
