import watchfulEyeScenario from "./scenarios/watchfulEyeScenario";
import selfDrivingDilemmaScenario from "./scenarios/selfDrivingDilemmaScenario";
import censoredWorldScenario from "./scenarios/censoredWorldScenario";
import faceOfDeceptionScenario from "./scenarios/faceOfDeceptionScenario";
import ethicalSoldierScenario from "./scenarios/ethicalSoldierScenario";
import carbonFootprintScenario from "./scenarios/carbonFootprintScenario";
import perfectPartnerScenario from "./scenarios/perfectPartnerScenario";
import consciousMachineScenario from "./scenarios/consciousMachineScenario";
import rogueCoderScenario from "./scenarios/rogueCoderScenario";
import joblessFutureScenario from "./scenarios/joblessFutureScenario";
import learningMachineScenario from "./scenarios/learningMachineScenario";
import minorityReportScenario from "./scenarios/minorityReportScenario";
import biasedJudgeScenario from "./scenarios/biasedJudgeScenario";
import artificialArtistScenario from "./scenarios/artificialArtistScenario";
import algorithmicDoctorScenario from "./scenarios/algorithmicDoctorScenario";

export const scenarioData = {
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

export type ScenarioKeys = keyof typeof scenarioData;
