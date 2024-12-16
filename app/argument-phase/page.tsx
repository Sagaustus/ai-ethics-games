"use client";

import React from "react";
import { Suspense } from "react";
import ArgumentPhaseWrapper from "../../components/ArgumentPhaseWrapper";

const ArgumentPhasePage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArgumentPhaseWrapper />
    </Suspense>
  );
};

export default ArgumentPhasePage;
