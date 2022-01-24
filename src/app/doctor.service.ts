import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  [x: string]: any; 
  baseURL = 'http://localhost:8082/api/v1/doctors';
  constructor(private httpClient: HttpClient) {}

  getDoctorsList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }

  createDoctor(doctor: Doctor): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, doctor);
  }
  getDoctorById(id: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseURL}/${id}`);
  }

  updateDoctor(id: number, doctor: Doctor): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, doctor);
  }

  deleteDoctor(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
