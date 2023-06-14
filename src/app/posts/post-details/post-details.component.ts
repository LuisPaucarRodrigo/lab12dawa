import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../post-list/post-list.component';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  array: any[] = data;
  id: any = 0
  elementoEncontrado: any = {};
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['parametro1'];
      this.elementoEncontrado = this.array.find(item => item.id == this.id);
      console.log(this.elementoEncontrado);
    });
  }
}
