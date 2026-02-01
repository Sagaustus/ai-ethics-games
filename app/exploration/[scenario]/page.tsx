import ExplorationClient from "./ExplorationClient";
import { scenarioData } from "@/data/scenarios";
import Link from 'next/link';

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
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-red-400">Invalid scenario</h1>
        <p className="mt-2 text-mindscape-fg/80">Please return to the scenario selection page.</p>
        <div className="mt-6">
          <Link
            href="/exploration"
            className="inline-flex items-center justify-center rounded-md bg-portal-gold px-4 py-2 font-semibold text-black hover:opacity-90 transition"
          >
            Back to Scenarios
          </Link>
        </div>
      </div>
    );
  }

  // Pass the scenario parameter to the client-side component
  return <ExplorationClient scenario={params.scenario as keyof typeof scenarioData} />;
}
