// src/app/services/stripe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private http: HttpClient) {}

  createCheckoutSession(
    lineItems: any[],
    successUrl: string,
    cancelUrl: string
  ): Observable<{ url: string }> {
    return this.http.post<{ url: string }>(
      'https://dsp-devo22b-jg-sr-ml-my.net/api/stripe/checkout',
      {
        line_items: lineItems,
        success_url: successUrl,
        cancel_url: cancelUrl,
      }
    );
  }
}
