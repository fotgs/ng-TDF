import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IStage } from "./shared/models/stage.model";
import { Observable } from "rxjs";
import { catchError, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class StagesService {
  private _url = "https://tdf-2020.herokuapp.com/api/tdf";
  // private _url = "http://localhost:5000/api/tdf";

  private stagesObservable$: Observable<IStage[]>;

  constructor(private _http: HttpClient) {
    console.log("StagesService constructor");
  }

  // public getStages(): Observable<IStage[]> {
  //   return this._http.get<IStage[]>(this._url);
  // }

  public getStages(): Observable<IStage[]> {
    if (!this.stagesObservable$) {
      console.log("No observable, new fetch");
      this.stagesObservable$ = this._http
        .get<IStage[]>(this._url)
        .pipe(shareReplay());
      return this.stagesObservable$;
    }
    console.log("Observable exists - shareReplay() working");
    return this.stagesObservable$;
  }
}
