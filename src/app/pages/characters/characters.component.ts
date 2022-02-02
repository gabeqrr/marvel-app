import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: [],
})
export class CharactersComponent implements OnInit {
  constructor(private charactersService: CharactersService) {}

  characters: Character = {} as Character;

  ngOnInit() {
    this.charactersService
      .getCharacters()
      .subscribe((result) => (this.characters = result));
  }
}
