import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  apiKey = 'fHPsP3FajWwnkwxBcsqjpjCKdtGrds7kivANIkAX';

  constructor(private httpClient: HttpClient) {}

  getMembers() {
    const options = {
      url: 'https://api.propublica.org/congress/v1/117/senate/members.json',
      headers: {
        'X-API-Key': this.apiKey,
      },
    };

    return this.httpClient.get(options.url, options);
  }
}
