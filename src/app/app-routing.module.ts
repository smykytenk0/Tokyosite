import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {PlayersComponent} from "./players/players.component";
import {GamesComponent} from "./games/games.component";
import {StatsComponent} from "./stats/stats.component";

const appRoutes: Routes = [
  {path:'mainPage', component:MainPageComponent},
  {path:'players', component:PlayersComponent},
  {path:'games', component:GamesComponent},
  {path:'stats', component:StatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
