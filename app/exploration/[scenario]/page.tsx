import ExplorationClient from "./ExplorationClient";
import { scenarioData } from "@/data/scenarios";

export async function generateStaticParams() {
  // Dynamically generate keys from scenarioData
  const scenarioKeys = Object.keys(scenarioData);

  return scenarioKeys.map((scenario) => ({
    scenario,
  }));
}

export default function ExplorationPage({
  params,
}: {
  params: { scenario: string };
}) {
  if (!params.scenario || !(params.scenario in scenarioData)) {
    return (
      <div style={{ color: "red", textAlign: "center" }}>
        <h1>Error: Invalid Scenario</h1>
        <p>Please return to the scenario selection page.</p>
        <button
          onClick={() => window.location.href = "/"}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ffcc00",
            color: "#000",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Back to Scenarios
        </button>
      </div>
    );
  }

  // Pass the scenario parameter to the client-side component
  return <ExplorationClient scenario={params.scenario as keyof typeof scenarioData} />;
}
