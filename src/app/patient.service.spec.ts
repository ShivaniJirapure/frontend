import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Patient } from './patient';

import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;
  let httpTestCtrl: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService],
    })
  );

  beforeEach(() => {
    service = TestBed.get(PatientService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  it('should return Patient data', () => {
    let testPost: Patient[] = [
      {
        id: 10020,
        name: 'Ram',
        age: 45,
        visitedDoctor: 'Dr. vinit',
        dateOfVisit: new Date(2022, 0, 1),
        prescription: 'Fever',
      },
    ];

    service.getPatientList().subscribe((res) => {
      expect(testPost).toBe(res, 'should check mocked data');
    });

    const req = httpTestCtrl.expectOne(service.baseURL);

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(testPost);
  });

  it('should add Patient data', () => {
    let newPost: Patient = {
      id: 10023,
      name: 'Jhon',
      age: 42,
      visitedDoctor: 'Dr. Ashish',
      dateOfVisit: new Date(2022, 3, 12),
      prescription: 'cough and cold',
    };

    service.createPatient(newPost).subscribe((res) => {
      expect(res).toBe(newPost);
    });

    const req = httpTestCtrl.expectOne(service.baseURL);

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(newPost);
  });
});
