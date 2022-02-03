import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styles: [],
})
export class CharactersListComponent implements OnChanges {
  @Input() character: Character;
  rows: any[] = [];
  counter: number = 36;
  page: number = 1;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.character) {
      this.rows = this.groupColumns(this.character);
      console.log(this.rows);
    }
  }

  groupColumns(character: Character) {
    const newRows = [];

    for (let i = 0; i < character?.data?.count; i += 6) {
      newRows.push(character.data.results.slice(i, i + 6));
    }

    return newRows;
  }
}
