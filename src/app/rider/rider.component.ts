import { Component, OnInit, Input } from "@angular/core";
import { IRider } from "../shared/models/rider.model";

@Component({
  selector: "app-rider",
  templateUrl: "./rider.component.html",
  styleUrls: ["./rider.component.css"],
})
export class RiderComponent implements OnInit {
  @Input() rider: IRider;
  @Input() riderTime;
  riderTimeString: string;

  constructor() {}

  ngOnInit(): void {
    this.riderTimeString = `${this.riderTime.hours}h ${this.riderTime.minutes}' ${this.riderTime.seconds}" `;
    // console.log(this.riderTime);
  }
}
