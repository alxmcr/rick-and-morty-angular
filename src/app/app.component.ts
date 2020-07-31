import { Component, VERSION } from '@angular/core';
import { ListService } from './list.service';

interface Model {
  username: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  model: Model = {
    username: ''
  };

  responseList;

  constructor(
    private listService: ListService
  ){}

  login(form: any): void {
    this.model = form;
    const username = this.model['username'];
    this.listService.getApi(username)
    .subscribe(
      response => (this.responseList = response)
    );
  }
}
