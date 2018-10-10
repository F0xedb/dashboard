import { Injectable } from '@angular/core';
import {Page} from '../list/list.component';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  save = 'bookmarks';

  pages: Page[] = [
    {url: 'https://www.google.com', description: 'The google search engine', title: 'google', sub: 'Search engine',
      source: 'https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_share.jpg'},
    {url: 'https://www.facebook.com', description: 'A social media platform', title: 'facebook', sub: 'social media',
      source: 'https://cdn.vox-cdn.com/thumbor/CpGcKsLDDB08gBi_qn0354BKtnQ=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/59323171/jbareham_180405_1777_facebook_0003.0.jpg'},
    {url: 'https://www.youtube.com', description: 'Online video viewer', title: 'youtube', sub: 'Video',
      source: 'https://techcrunch.com/wp-content/uploads/2017/02/youtube-unplugged.png?w=730&crop=1'}
  ];


constructor() { }

  // Get al the bookmarks from the local storage
  getPages() {
    const string = localStorage.getItem(this.save);
    if (string) {
      return JSON.parse(string);
    }
    console.log('empty');
    return this.pages;
  }

  // Add a page to local storage
  AddPage(page: Page) {
    const arr = this.getPages();
    if (!this.PageAlreadyExists(page)) {
      arr.push(page);
      localStorage.setItem(this.save, JSON.stringify(arr));
      return true;
    }

    console.log('Page already exists');
    return false;

  }

  // remove a page from local storage
  RemovePage(page: Page) {
    const arr = this.getPages();
    const end = [];
    for (let i = 0; i < arr.length; i++) {
      if (!this.check(arr[i], page)) {
        end.push(arr[i]);
      }
    }
    localStorage.setItem(this.save, JSON.stringify(end));
  }

  // check 2 objects against eachother even if the order of properties is different
  check(page1: Page, page2: Page) {
      // the objects are already the same. Leave it as is
      if (this.checkJSON(page1, page2)) {
        return true;
      }
      if (this.checkJSON(this.orderPage(page1), this.orderPage(page2))) {
        return true;
      }
      return false;

  }

  // instead of checking based on the object we check based on the string.
  checkJSON(first, second) {
    return JSON.stringify(first) === JSON.stringify(second);
  }

  // we reorder the object so that they always have the same order
  orderPage(page1: Page): Page {
    return {title: page1.title, sub: page1.sub, source: page1.source, url: page1.url, description: page1.description};
  }

  // check if the page you enter already exists in storage
  PageAlreadyExists(page: Page) {
    const arr = this.getPages();
    for (let i = 0; i < arr.length; i++) {
      if (this.check(arr[i], page)) {
        return true;
      }
    }
    return false;
  }


}
