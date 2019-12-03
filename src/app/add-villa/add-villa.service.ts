import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { VillaModel } from "../models/VillaModel";

@Injectable({
  providedIn: "root"
})
export class VillaService {
  constructor(private http: HttpClient) {
    //retrive
  }

  addVilla(newVilla: VillaModel) {
    return this.http
      .post<VillaModel>("http://localhost:3000/api/villa", newVilla, {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
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
