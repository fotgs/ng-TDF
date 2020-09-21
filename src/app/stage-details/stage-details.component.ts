import { Component, OnInit, Input } from "@angular/core";
import { IStage } from "../shared/models/stage.model";

@Component({
  selector: "app-stage-details",
  templateUrl: "./stage-details.component.html",
  styleUrls: ["./stage-details.component.css"],
})
export class StageDetailsComponent implements OnInit {
  @Input("stageObj") stage: IStage;
  stageDate: Date;
  stageType: string;
  stageTypeClass = {};

  constructor() {}

  ngOnInit(): void {
    this.stageType = this.stage.stageType;
    this.stageDate = new Date(
      this.stage.stageDate.year,
      this.stage.stageDate.month - 1,
      this.stage.stageDate.day
    );
    this.stageTypeClass = {
      "fa-road": this.stageType === "Flat",
      "fa-map-marked": this.stageType === "Hilly",
      "fa-image": this.stageType === "Mountain",
      "fa-stopwatch": this.stageType === "ITT",
    };
  }
}
