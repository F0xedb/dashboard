import { Component, OnInit } from '@angular/core';
import {Page} from '../list/list.component';
import {StorageService} from '../shared/storage.service';
import {Router} from '@angular/router';

/*
  This component is a form to add a new bookmark to the list
 */
@Component({
  selector: 'dash-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  page: Page;

  constructor(private storage: StorageService, private router: Router) {
    this.page = {title: 'Google', sub: 'Search Engine', url: 'https://www.google.com',
      description: 'Google Search, also referred to as Google Web Search or simply Google, is a web search engine developed by Google LLC. It is the most-used search engine on the World Wide Web, handling more than three billion searches each day. As of July 2018, it is the most used search engine worldwide across all platforms with 90.46% market share.', source: 'https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_share.jpg'};
  }

  ngOnInit() {
  }

  add() {
    this.storage.AddPage(this.page);
    this.router.navigate(['/']);
  }

}
