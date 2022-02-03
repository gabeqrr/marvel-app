import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharactersListComponent } from './pages/characters/characters-list/characters-list.component';
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
import { MenuService } from './services/menu.service';
import { SearchBarComponent } from './layout/search-bar/search-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    CharactersComponent,
    ComicsComponent,
    CreatorsComponent,
    EventsComponent,
    SeriesComponent,
    StoriesComponent,
    CharactersListComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [
    CharactersService,
    ComicsService,
    CreatorsService,
    EventsService,
    SeriesService,
    StoriesService,
    MenuService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
