export async function generateStaticParams() {
    const scenarioKeys = [
      "watchfulEyeScenario",
      "selfDrivingDilemmaScenario",
      "rogueCoderScenario",
      "perfectPartnerScenario",
      "faceOfDeceptionScenario",
      "biasedJudgeScenario",
      "algorithmicDoctorScenario",
      "joblessFutureScenario",
      "ethicalSoldierScenario",
      "censoredWorldScenario",
      "artificialArtistScenario",
      "learningMachineScenario",
      "minorityReportScenario",
      "carbonFootprintScenario",
      "consciousMachineScenario",
    ];
  
    return scenarioKeys.map((scenario) => ({
      scenario,
    }));
  }
  