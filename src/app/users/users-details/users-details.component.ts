import { Component } from '@angular/core';
import { userslist } from '../user-list/user-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {
  array: any[] = userslist;
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
