import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChoixClient } from './choixclient';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChoixclientService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getChoixclients(): Observable<ChoixClient[]> {
    return this.http.get<ChoixClient[ ]>(`${this.apiServerUrl}/choixclient/all`);
  }

  public addChoixclients(choixclient: ChoixClient): Observable<ChoixClient> {
    return this.http.post<ChoixClient>(`${this.apiServerUrl}/choixclient/add`, choixclient);
  }

  public updateChoixclients(choixclient: ChoixClient): Observable<ChoixClient> {
    return this.http.put<ChoixClient>(`${this.apiServerUrl}/choixclient/update`, choixclient);
  }

  public deleteChoixclient(choixclientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/choixclient/delete/${choixclientId}`)
  }
}
