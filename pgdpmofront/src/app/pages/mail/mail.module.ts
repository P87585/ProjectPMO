import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../theme/pipes/pipes.module';

import { MailComponent } from './mail.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';


export const routes = [
  { path: '',
    component: MailComponent,
    breadcrumb:{
      title: 'Mail'
    },
    children: [
      { path: '', redirectTo: 'mail-list/inbox', pathMatch: 'full' },
      { path: 'mail-list/:type', component: MailListComponent, data:{ breadcrumb: 'Inbox'} },
      { path: 'mail-compose', component: MailComposeComponent, data:{ breadcrumb: 'Compose'} },
      { path: 'mail-list/:type/:id', component: MailDetailComponent, data:{ breadcrumb: 'Detail'}}          
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MailComponent,
    MailComposeComponent,
    MailListComponent,
    MailDetailComponent
  ]
})
export class MailModule { }
