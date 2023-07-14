import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from '../annonce';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://localhost:8082/AnnonceMeuble';

  constructor(private http: HttpClient) { }

  getAllAnnonce(): Observable<Annonce[]> {
    
    return this.http.get<Annonce[]>(this.apiUrl);
  }

  createAnnonce(todo: Annonce): Observable<Annonce> {
    
    return this.http.post<Annonce>(this.apiUrl, todo);
  }

  updateAnnonce(id:any, annonce: Annonce): Observable<Annonce> {
   
   
    return this.http.put<Annonce>(this.apiUrl , annonce);
  }

  deleteAnnonce(id: number): Observable<void> {
    const url = this.apiUrl

    return this.http.delete<void>(url);
  }
}

