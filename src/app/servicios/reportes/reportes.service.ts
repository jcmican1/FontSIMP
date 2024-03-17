import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportesModel } from 'src/app/Modelos/Reportes.model';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  url = 'https://backendsimp-production.up.railway.app';
  constructor(private http: HttpClient) { }

  obtenerReportes() {
    return this.http.get<ReportesModel[]>(this.url + '/reportes');
  }
  
}


