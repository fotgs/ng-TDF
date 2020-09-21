import { Component, OnInit } from "@angular/core";
import { StagesService } from "../stages.service";
import { IStage } from "../shared/models/stage.model";

@Component({
  selector: "app-stages-list",
  templateUrl: "./stages-list.component.html",
  styleUrls: ["./stages-list.component.css"],
})
export class StagesListComponent implements OnInit {
  public stages: IStage[] = [];
  errorMsg: string;

  constructor(private _stages: StagesService) {}

  ngOnInit(): void {
    this._stages.getStages().subscribe(
      (data) => {
        this.stages = data;
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }
}
