import { IRiderCountry } from "./rider-country.model";
import { IRiderTeam } from "./rider-team.model";

export interface IRider {
  riderNo: number;
  riderName: string;
  riderImage: string;
  riderCountry: IRiderCountry;
  riderTeam: IRiderTeam;
}
