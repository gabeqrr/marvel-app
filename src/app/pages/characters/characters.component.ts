import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: [],
})
export class CharactersComponent implements OnInit {
  characters: Character = {} as Character;

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.setCharacters();
  }

  setCharacters() {
    this.charactersService
    .getCharacters()
    .subscribe((characters) => (this.characters = characters));
  }

  setOffsetForPaginationCharacters(event: Character) {
    console.log('EVENT:', event);
    this.characters = event;
    this.setCharacters();

    console.log('CHARACTERS:', this.characters);
  }
}
