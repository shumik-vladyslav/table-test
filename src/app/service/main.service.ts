import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url = 'http://psuback.lineapps.org';

  constructor(private http: HttpClient) {}
  comtrackEvents(data) {
    return this.http.post(this.url + '/api/v1/event_commtrac_evt/data', data);
  }
  comtrackDelete(item) {
    return this.http.post(this.url + '/api/v1/event_commtrac_evt/delete', item);
  }
  comtrackUpdate(item) {
    return this.http.post(this.url + '/api/v1/event_commtrac_evt/update', item);
  }
  comtrackCreate(item) {
    return this.http.post(this.url + '/api/v1/event_commtrac_evt/create', item);
  }
}
