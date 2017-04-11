import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from './../../../theme/directives/directives.module';
import { GroupComponent } from './group/group.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';

export const routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: 'user', component: UserComponent, data: { breadcrumb: 'User' } },
  { path: 'group', component: GroupComponent, data: { breadcrumb: 'Group' } },
  { path: 'role', component: RoleComponent, data: { breadcrumb: 'Role' } }
];

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule],
  declarations: [GroupComponent, RoleComponent, UserComponent]
})
export class UserSettingModule { }
