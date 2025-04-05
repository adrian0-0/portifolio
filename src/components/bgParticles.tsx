"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import bgParticlesConfig from "@/configs/bgParticlesConfig";

export const BgParticles = () => {
  const [init, setInit] = useState(false);

  const particlesLoaded = async (container?: Container): Promise<void> => {};

  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={bgParticlesConfig}
        />
      )}
    </>
  );
};
