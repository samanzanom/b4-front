import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonDTO } from '../models/person-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  private apiUrl = '/api/excel'; // URL simplificada

  constructor(private http: HttpClient) { }

  uploadExcel(file: File): Observable<PersonDTO[]> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<PersonDTO[]>(`${this.apiUrl}/upload`, formData);
  }

  getAllPersons(): Observable<PersonDTO[]> {
    return this.http.get<PersonDTO[]>(`${this.apiUrl}/persons`);
  }
}
