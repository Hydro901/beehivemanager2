import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BeehivePayload } from '../DTOs/beehivePayload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeehiveService {

  constructor(private http: HttpClient) { }

  public getBeehives(): Observable<BeehivePayload[]>{
    return this.http.get<BeehivePayload[]>("http://localhost:8080/beehive/all")
  }

  public addBeehive(beehive : BeehivePayload): Observable<BeehivePayload>{
    return this.http.post<BeehivePayload>("http://localhost:8080/beehive/add", beehive)
  }

  /* savePicture(picture : File, idBeehive : number):Observable<BeehivePayload>{
    let fd = new FormData();
    fd.append("photo", picture)
    fd.append("id", String(idBeehive))
    return this.http.post<BeehivePayload>("http://localhost:8080/beehive/savePhoto", fd)
  } */

  savePicture(picture : File, beehive : BeehivePayload):Observable<BeehivePayload>{
    let fd = new FormData();
    fd.append("photo", picture)
    //fd.append("beehive", beehive)
    return this.http.post<BeehivePayload>("http://localhost:8080/beehive/savePhoto", fd)
  }



}
