import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import {BookmarkComponent, DialogConfComponent} from './bookmark/bookmark.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule, MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { AddFormComponent } from './add-form/add-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListComponent,
    BookmarkComponent,
    AddFormComponent,
    DialogConfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    FlexModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogConfComponent]
})
export class AppModule { }
