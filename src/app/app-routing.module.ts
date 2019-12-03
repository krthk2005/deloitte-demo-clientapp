import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViallasListComponent } from "./viallas-list/viallas-list.component";
import { AddVillaComponent } from "./add-villa/add-villa.component";

const routes: Routes = [
  { path: "villas", component: ViallasListComponent },
  { path: "add-villa", component: AddVillaComponent },
  {
    path: "",
    redirectTo: "/villas",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/villas",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
