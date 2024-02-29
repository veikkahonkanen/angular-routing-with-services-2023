import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdministratorsService {

  // Remove AdministratorsService usage to make the project /admin routing work on angular 17
  constructor(private http: HttpClient) { }

  getAdmins(): Observable<any> {
    return this.http.get("http://localhost/3000/employees");
  }
}
