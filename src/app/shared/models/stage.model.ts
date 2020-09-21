import { IRider } from "./rider.model";

type stageType = "Flat" | "Hilly" | "Mountain" | "ITT";

export interface IStage {
  stageId: number;
  stageDate: { day: number; month: number; year: number };
  stageLengthKm: number;
  stageStart: string;
  stageFinish: string;
  stageType: stageType;
  stageProfile: string;
  stageRankings: {
    position: number;
    time: { hours: number; minutes: number; seconds: number };
    rider: IRider;
  }[];
}
