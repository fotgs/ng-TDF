import { Component, OnInit } from "@angular/core";
import { StagesService } from "../stages.service";
import { IStage } from "../shared/models/stage.model";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-stages-list",
  templateUrl: "./stages-list.component.html",
  styleUrls: ["./stages-list.component.css"],
})
export class StagesListComponent implements OnInit {
  stages: IStage[] = [];
  errorMsg: string = null;

  constructor(private _stages: StagesService) {}

  ngOnInit(): void {
    this._stages.getStages().subscribe(
      (data) => {
        this.stages = data;
      },
      (error) => {
        switch (error.status) {
          case 404:
            this.errorMsg = "API URL Not Found.";
            break;
          case 500:
            this.errorMsg =
              "Could not fetch data from the API due to an Internal Server Error.";
            break;
          default:
            this.errorMsg = "Could not fetch API data.";
            break;
        }
        console.log(error);
      }
    );
  }
}
