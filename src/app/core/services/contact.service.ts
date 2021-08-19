import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {timeout} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  sendMessage(captcha: string, name: string, email: string, message: string): Observable<unknown> {
    const data = new FormData();
    data.append('g-recaptcha-response', captcha);
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);

    return this.http.post('https://formspree.io/f/xpzkordb', data, {
      headers: {
        'Accept': 'application/json'
      }
    }).pipe(
      timeout(10000)
    );
  }
}
