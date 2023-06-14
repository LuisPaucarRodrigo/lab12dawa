import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: 'publidetails/:arrayParam', component: PostDetailsComponent}
// ];

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PostListComponent,
    PostDetailsComponent
  ]
})
export class PostsModule { }
