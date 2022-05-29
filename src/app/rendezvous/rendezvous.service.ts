import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Rendezvous } from "../ajouter-rdv/rendezvous";

@Injectable({
    providedIn: 'root'
  })
  export class RendezvousService {
    private apiServerUrl = environment.apiBaseUrl;
  
    constructor(private http: HttpClient) { }
  
    public getRendezvous(): Observable<Rendezvous[]> {
      return this.http.get<Rendezvous[]>(`${this.apiServerUrl}/rendezvous/all`);
    }
  
    public addRendezvous(rendezvous : Rendezvous): Observable<Rendezvous> {
      return this.http.post<Rendezvous>(`${this.apiServerUrl}/rendezvous/add`, rendezvous);
    }
  
    public updateRendezvous(rendezvous: Rendezvous): Observable<Rendezvous> {
      return this.http.put<Rendezvous>(`${this.apiServerUrl}/rendezvous/update`, rendezvous);
    }
  
    public deleteRendezvous(rendezvousId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/rendezvous/delete/${rendezvousId}`)
    }
  }
  