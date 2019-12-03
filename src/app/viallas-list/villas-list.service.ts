import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { VillaModel } from "../models/VillaModel";

@Injectable({
  providedIn: "root"
})
export class VillasListService {
  apiKey = "918f359d3e76ab6750c73e7fc28958cb";
  url = "http://api.openweathermap.org/data/2.5/forecast?q=";
  constructor(private httpClient: HttpClient) {
    //retrive
  }

  getVillas() {
    return this.httpClient
      .get<VillaModel[]>("http://localhost:3000/api/villas")
      .pipe(catchError(this.handleError));
  }

  getWeather(city) {
    return this.httpClient
      .get(this.url + city + "&APPID=" + this.apiKey + "&units=metric")
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
