import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dash-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})


/*
 Basic footer for the bookmark app
 */
export class FooterComponent implements OnInit {
  // current version of the application
  // TODO: move version information to the environments page
  public version = '0.0.1';
  constructor() { }

  ngOnInit() {
  }

}
