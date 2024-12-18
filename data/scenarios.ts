// Import all scenarios
import { watchfulEyeScenario } from "./scenarios/watchfulEyeScenario";
import { selfDrivingDilemmaScenario } from "./scenarios/selfDrivingDilemmaScenario";
import { censoredWorldScenario } from "./scenarios/censoredWorldScenario";
import { faceOfDeceptionScenario } from "./scenarios/faceOfDeceptionScenario";
import { ethicalSoldierScenario } from "./scenarios/ethicalSoldierScenario";
import { carbonFootprintScenario } from "./scenarios/carbonFootprintScenario";
import { perfectPartnerScenario } from "./scenarios/perfectPartnerScenario";
import { consciousMachineScenario } from "./scenarios/consciousMachineScenario";
import { rogueCoderScenario } from "./scenarios/rogueCoderScenario";
import { joblessFutureScenario } from "./scenarios/joblessFutureScenario";
import { learningMachineScenario } from "./scenarios/learningMachineScenario";
import { minorityReportScenario } from "./scenarios/minorityReportScenario";
import { biasedJudgeScenario } from "./scenarios/biasedJudgeScenario";
import { artificialArtistScenario } from "./scenarios/artificialArtistScenario";
import { algorithmicDoctorScenario } from "./scenarios/algorithmicDoctorScenario";

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
