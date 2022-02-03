import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {

  menuItems: Array<any>;

  constructor(public menu: MenuService) {
    this.menuItems = menu.getMenu();
  }

  ngOnInit(): void {}
}
