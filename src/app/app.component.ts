import { Component, VERSION } from '@angular/core';
import { CharacterService } from './character.service';

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
    private characterService: CharacterService
  ){}

  ngOnInit() { this.listCharacter(); }

  listCharacter(): void {
    this.characterService.getApi()
    .subscribe(
      (response :any) => {
        // console.log(typeof response);
        console.log(response);
        // console.log(response.toJSON());
        this.responseList = response.results
      }
    );
  }
}
