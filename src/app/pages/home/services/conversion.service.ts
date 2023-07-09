import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversionService {
  private apiUrl: any;
  constructor(
    @Inject('environment') environment: any,
    private http: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public getSymbols() {
    const url = `${this.apiUrl}symbols`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.symbols;
      })
    );
  }

  public convertCurrency(amount: number, from: string, to: string) {
    const url = `${this.apiUrl}convert`;
    let params = new HttpParams();
    params = params.set('from', from);
    params = params.set('to', to);
    params = params.set('amount', amount);
    return this.http.get<any>(url, { params }).pipe(
      map((response) => {
        return response.result;
      })
    );
  }

  public latestExchange(from: string, to: string) {
    const url = `${this.apiUrl}latest`;
    let params = new HttpParams();
    params = params.set('base', from);
    params = params.set('symbols', to);
    return this.http.get<any>(url, { params }).pipe(
      map((response) => {
        return response.rates;
      })
    );
  }
}
