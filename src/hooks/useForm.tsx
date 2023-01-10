"use client";

import { FormEvent, useState } from "react";

type FormSteps = JSX.Element[];

interface FormState {
  currentStep: number;
  currentComponent: JSX.Element;
  isFirstStep: boolean;
  isLastStep: boolean;

  changeStep: (index: number, event?: FormEvent<HTMLFormElement>) => void;
}

export function useForm(steps: FormSteps) {
  const [currentStep, setCurrentStep] = useState(0);

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const changeStep = (index: number, event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (index < 0 || index >= steps.length) return;

    setCurrentStep(index);
  };

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isFirstStep,
    isLastStep,
  } as FormState;
}
