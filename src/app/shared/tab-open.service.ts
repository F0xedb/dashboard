import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabOpenService {

  constructor() { }

  // url must start with https:// otherwise it will append the url to the base url
  open(url) {
    window.location.href = url;
  }

  // url must start with https:// otherwise it will append the url to the base url
  openNewTab(url) {
    window.open(url, '_blank');
  }
}
