import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ViallasListComponent } from "./viallas-list/viallas-list.component";
import { AddVillaComponent } from "./add-villa/add-villa.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { VillaService } from "./add-villa/add-villa.service";
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViallasListComponent,
    AddVillaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [VillaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
