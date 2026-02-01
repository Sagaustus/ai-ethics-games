"use client";

import React from "react";
import { scenarioData } from "@/data/scenarios";
import Link from "next/link";

const ExplorationHome: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Explore AI Ethics Scenarios</h1>
        <p className="mt-3 text-mindscape-fg/80">Pick a scenario to explore. Your choices shape the debate.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(scenarioData).map((key) => {
          const scenario = scenarioData[key as keyof typeof scenarioData];
          return (
            <Link
              key={key}
              href={`/exploration/${key}`}
              className="group overflow-hidden rounded-xl bg-debate-panel/60 border border-white/10 hover:border-portal-gold/40 transition"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={scenario.image}
                alt={scenario.title}
                className="h-40 w-full object-cover opacity-90 group-hover:opacity-100 transition"
              />
              <div className="p-5">
                <h2 className="text-lg font-bold text-portal-gold group-hover:text-portal-gold/90 transition-colors">
                  {scenario.title}
                </h2>
                <p className="mt-2 text-sm text-mindscape-fg/80 line-clamp-3">{scenario.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorationHome;
