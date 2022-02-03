import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './layout/home/home.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { CreatorsComponent } from './pages/creators/creators.component';
import { EventsComponent } from './pages/events/events.component';
import { SeriesComponent } from './pages/series/series.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { MenuService } from './services/menu.service';
import { menu } from './app.menu';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'creators', component: CreatorsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'stories', component: StoriesComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(public menuService: MenuService) {
    menuService.addMenu(menu);
  }
}
