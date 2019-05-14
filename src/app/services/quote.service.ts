import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../core/domain/quote.model';


@Injectable()
export class QuoteService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_CONFIG') private config
  ) {

  }

  getQuote(): Observable<Quote> {
    const uri = `${this.config.uri}/quotes/${Math.floor(Math.random() * 4)}`;
    return this.http.get<Quote>(uri).debug('quote');
  }
}
