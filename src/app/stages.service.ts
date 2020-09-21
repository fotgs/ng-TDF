import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IStage } from "./shared/models/stage.model";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class StagesService {
  private _url = "https://tdf-2020.herokuapp.com/api/tdf";
  // private _url = "http://localhost:5000/api/tdf";

  constructor(private _http: HttpClient) {}

  public getStages(): Observable<IStage[]> {
    return this._http.get<IStage[]>(this._url);
  }
}
