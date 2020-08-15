import { tap, map } from 'rxjs/operators';
import { StockIndex } from 'src/app/modals/stock-index.modal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  fetchData() {
    return this.http.get<{ data: any[] }>(environment.server_url + 'stock-index')
      .pipe(map(res => {
        res.data[0].Diff = res.data[0].Open - res.data[0].Close;
        res.data[1].Diff = res.data[1].Open - res.data[1].Close;
        return res;
      }));
  }

}
