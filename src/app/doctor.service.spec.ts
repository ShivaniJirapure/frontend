import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Doctor } from './doctor';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DoctorService } from './doctor.service';

describe('DoctorService', () => {
  let service: DoctorService;
  let httpTestCtrl: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DoctorService],
    })
  );

  beforeEach(() => {
    service = TestBed.get(DoctorService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  it('should return doctor data', () => {
    let testPost: Doctor[] = [
      {
        id: 101,
        name: 'Dr. Asish kumar',
        age: 45,
        gender: 'Male',
        specialist_fields: 'Surgeon',
        no_ofPatient: 10,
      },
    ];

    service.getDoctorsList().subscribe((res) => {
      expect(testPost).toBe(res, 'should check mocked data');
    });

    const req = httpTestCtrl.expectOne(service.baseURL);

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testPost);
  }); 

  it('should add doctor data', () => {
    let newPost: Doctor = {
      id: 110,
      name: 'Dr. Vinit',
      age: 45,
      gender: 'Male',
      specialist_fields: 'cardio',
      no_ofPatient: 40,
    };

    service.createDoctor(newPost).subscribe((res) => {
      expect(res).toBe(newPost);
    });

    const req = httpTestCtrl.expectOne(service.baseURL);

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(newPost);
  });
});
