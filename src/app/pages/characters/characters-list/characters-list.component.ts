import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { CharactersService } from 'src/app/services/characters.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styles: [],
})
export class CharactersListComponent implements OnChanges {
  @Input() character: Character;
  @Output() status: EventEmitter<any> = new EventEmitter();

  rows: any[] = [];
  page: number = 1;

  colsOfCharacters: number = 6

  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.character) {
      this.rows = this.groupColumns(this.character);
    }
  }

  groupColumns(character: Character) {
    const newRows = [];

    for (let i = 0; i < character?.data?.count; i += this.colsOfCharacters) {
      newRows.push(character.data.results.slice(i, i + this.colsOfCharacters));
    }

    return newRows;
  }

  applyOffsetForPagination(page: any) {
    console.log('PAGE', page);
    let limit = this.character.data.limit;
    let offset = page * limit - limit;
    console.log('OFFSET', offset);
    this.charactersService.offSetForPagination = offset;
    this.character.data.offset = offset;
    this.status.emit(this.character);
    window.scroll(0,0);
  }
}
