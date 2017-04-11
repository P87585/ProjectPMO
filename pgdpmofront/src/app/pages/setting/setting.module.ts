import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../theme/directives/directives.module';

import { UserSettingModule } from './user-setting/user-setting.module';

export const routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Setting'
    },
    children: [
      {
        path: 'user-setting',
        loadChildren: './user-setting/user-setting.module#UserSettingModule',
        data: { breadcrumb: 'User Setting' }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule.forChild(routes),
    UserSettingModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class SettingModule { }
