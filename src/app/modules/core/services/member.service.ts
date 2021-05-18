import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private httpClient: HttpClient) {}

  getMembers() {
    return this.httpClient
      .get('https://api.propublica.org/congress/v1/117/senate/members.json')
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      return throwError(`Error: ${error.error.message}`);
    }

    return throwError(`Error Code: ${error.status}\nMessage: ${error.message}`);
  }
}
