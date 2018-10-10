import { Component, OnInit, Inject } from '@angular/core';
import {Page} from '../list/list.component';
import {Input} from '@angular/core';
import {TabOpenService} from '../shared/tab-open.service';
import {StorageService} from '../shared/storage.service';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  confirmation: string;
}


/*
  A component to display bookmarks
  A bookmark is a card that displays information about the given site
*/
@Component({
  selector: 'dash-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  @Input() pages: Page;
  constructor(private opener: TabOpenService, private storage: StorageService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: this.pages.title
    };

    const dialogRef = this.dialog.open(DialogConfComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.remove();
      }
    });
  }

  // Open the bookmark in a new tab
  open() {
    this.opener.openNewTab(this.pages.url);
  }

  // TODO: remove the given bookmark from the view and inform the server
  remove() {
    this.storage.RemovePage(this.pages);
    location.reload();
  }

}



@Component({
  selector: 'dash-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['dialog.scss']
})
export class DialogConfComponent {
  Confirmation = 'Are you sure you want to delete this?';
  title = '';
  constructor(public dialogRef: MatDialogRef<DialogConfComponent>,
  @Inject(MAT_DIALOG_DATA) public data) {
    this.title = data.title;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
