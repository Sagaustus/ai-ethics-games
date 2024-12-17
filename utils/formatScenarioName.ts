export const formatScenarioName = (rawScenario: string): string => {
    return rawScenario
      .split("-")
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  };
  