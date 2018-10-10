import { Component, OnInit } from '@angular/core';
import {StorageService} from '../shared/storage.service';

// this interface defines how a bookmark must look
export interface Page {
  url: string;
  description: string;
  title: string;
  sub: string;
  source: string;
}

/*
  This component generates a list of bookmarks and displays it responsively
 */

@Component({
  selector: 'dash-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // TODO: get the page information from the server
  pages: Page[];
  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.pages = this.storage.getPages();
  }

}
