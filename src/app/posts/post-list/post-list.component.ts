import { Component } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  lista = data
}

export const data = [
  {id:1 , titulo: 'Elemento 1', contenido: 'Contenido del elemento 1' },
  {id:2 , titulo: 'Elemento 2', contenido: 'Contenido del elemento 2' },
  {id:3 , titulo: 'Elemento 3', contenido: 'Contenido del elemento 3' }
]