import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { MenuComponent } from './layout/menu/menu.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { CreatorsComponent } from './pages/creators/creators.component';
import { EventsComponent } from './pages/events/events.component';
import { SeriesComponent } from './pages/series/series.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { CharactersService } from './services/characters.service';
import { ComicsService } from './services/comics.service';
import { CreatorsService } from './services/creators.service';
import { EventsService } from './services/events.service';
import { SeriesService } from './services/series.service';
import { StoriesService } from './services/stories.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CharactersComponent,
    ComicsComponent,
    CreatorsComponent,
    EventsComponent,
    SeriesComponent,
    StoriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    CharactersService,
    ComicsService,
    CreatorsService,
    EventsService,
    SeriesService,
    StoriesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
