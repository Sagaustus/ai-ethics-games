// Import all scenarios
import { watchfulEyeScenario } from "./watchfulEyeScenario";
import { selfDrivingDilemmaScenario } from "./selfDrivingDilemmaScenario";
import { censoredWorldScenario } from "./censoredWorldScenario";
import { faceOfDeceptionScenario } from "./faceOfDeceptionScenario";
import { ethicalSoldierScenario } from "./ethicalSoldierScenario";
import { carbonFootprintScenario } from "./carbonFootprintScenario";
import { perfectPartnerScenario } from "./perfectPartnerScenario";
import { consciousMachineScenario } from "./consciousMachineScenario";
import { rogueCoderScenario } from "./rogueCoderScenario";
import { joblessFutureScenario } from "./joblessFutureScenario";
import { learningMachineScenario } from "./learningMachineScenario";
import { minorityReportScenario } from "./minorityReportScenario";
import { biasedJudgeScenario } from "./biasedJudgeScenario";
import { artificialArtistScenario } from "./artificialArtistScenario";
import { algorithmicDoctorScenario } from "./algorithmicDoctorScenario";

// Define and export the Scenario type globally
export interface Scenario {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  exploration: {
    text: string;
    choices: { text: string; outcome: string }[];
    outcome?: string;
  }[];
  endMessage: string;
}

// Export all scenarios in a single object
export const scenarios: Record<string, Scenario> = {
  watchfulEyeScenario,
  selfDrivingDilemmaScenario,
  censoredWorldScenario,
  faceOfDeceptionScenario,
  ethicalSoldierScenario,
  carbonFootprintScenario,
  perfectPartnerScenario,
  consciousMachineScenario,
  rogueCoderScenario,
  joblessFutureScenario,
  learningMachineScenario,
  minorityReportScenario,
  biasedJudgeScenario,
  artificialArtistScenario,
  algorithmicDoctorScenario,
};
