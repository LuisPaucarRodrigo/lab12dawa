import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: 'users/:arrayParam', component: PostDetailsComponent}
// ];

@NgModule({
  declarations: [
    UserListComponent,
    UsersDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UserListComponent,
    UsersDetailsComponent
  ]
})
export class UsersModule { }
