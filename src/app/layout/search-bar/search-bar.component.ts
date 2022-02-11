import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {
  settings: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.settings = this.fb.group({
      search: [''],
      //
    });
  }
}
