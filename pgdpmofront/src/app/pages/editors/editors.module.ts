import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { FroalaComponent } from './froala/froala.component';

export const routes = [
  { path: '', redirectTo: 'ckeditor', pathMatch: 'full'},
  { path: 'ckeditor', component: CkeditorComponent, data: { breadcrumb: 'Ckeditor' } },
  { path: 'froala-editor', component: FroalaComponent, data: { breadcrumb: 'Froala Editor' } }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    CKEditorModule,    
    RouterModule.forChild(routes)
  ],
  declarations: [
    CkeditorComponent,
    FroalaComponent
  ]
})
export class EditorsModule { }
