import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalSessionService {
  set(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  get(key: string) {
    return sessionStorage.getItem(key);
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }

  clear(){
    sessionStorage.clear();
  }
}
