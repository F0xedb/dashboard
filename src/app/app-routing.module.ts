import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {AddFormComponent} from './add-form/add-form.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: AddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
