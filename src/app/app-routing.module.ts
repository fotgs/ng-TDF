import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { StagesListComponent } from "./stages-list/stages-list.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "stages", component: StagesListComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [StagesListComponent, HomeComponent];
