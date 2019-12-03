import { Component, OnInit } from "@angular/core";
import { VillaModel } from "../models/VillaModel";
import { VillasListService } from "./villas-list.service";

@Component({
  selector: "app-viallas-list",
  templateUrl: "./viallas-list.component.html",
  styleUrls: ["./viallas-list.component.scss"],
  providers: [VillasListService]
})
export class ViallasListComponent implements OnInit {
  villas: VillaModel[];
  constructor(private getVillaService: VillasListService) {}

  ngOnInit() {
    this.getVillaService.getVillas().subscribe(villas => {
      this.villas = villas;
      this.villas.forEach(villa => {
        this.getVillaService.getWeather(villa.city_name).subscribe(
          (response: any) => {
            villa.temperature = response.list[0].main.temp + " &#186; C";
          },
          error => {
            villa.temperature = "not found";
          }
        );
      });
    });
  }
}
