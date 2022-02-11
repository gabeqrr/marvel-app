import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Md5 } from 'ts-md5/dist/md5';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character';
import { config } from '../config'

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  readonly time = Number(new Date());
  readonly md5 = new Md5();
  readonly hash = this.md5
    .appendStr(this.time + config.privateKey + config.publicKey)
    .end();

  limitOfCharacters = 36;
  offSetForPagination = 0;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character> {
    return this.http.get<Character>(
      `http://gateway.marvel.com/v1/public/characters?offset=${this.offSetForPagination}&limit=${this.limitOfCharacters}&ts=${this.time}&apikey=${config.publicKey}&hash=${this.hash}`
    );
  }
}
