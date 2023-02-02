import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ValorantApiService {
  baseUrl = environment.baseUrl;
  baseMediaUrl = environment.baseMediaUrl;
  mapsUrl = environment.mapsUrls;
  constructor(private http: HttpClient) {}

  getMaps() {
    return this.http.get<any>(`${this.baseUrl}/maps`);
  }

  getMediaMap(mapName: any) {
    return this.http.get<any>(`${this.baseMediaUrl}/maps${mapName}/splash.png`);
  }

  getAgents() {
    return this.http.get<any>(`${this.baseUrl}/agents`);
  }
}
