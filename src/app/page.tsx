"use client";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

import ReviewForm from "../components/ReviewForm";
import UserForm from "../components/UserForm";
import Thanks from "../components/Thanks";
import Steps from "../components/Steps";

import { useForm } from "../hooks/useForm";
import { useState } from "react";

import { defaultFormData, FormData } from "../utils/formData";

import "./Page.scss";

export default function Home() {
  const [data, setData] = useState(defaultFormData);

  const updateFieldHandler = (key: keyof FormData, value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const formStepsComponents = [
    <UserForm
      key="userform"
      data={data}
      updateFieldHandler={updateFieldHandler}
    />,
    <ReviewForm
      key="reviewform"
      data={data}
      updateFieldHandler={updateFieldHandler}
    />,
    <Thanks key="thanks" data={data} />,
  ];

  const { currentComponent, currentStep, changeStep, isFirstStep, isLastStep } =
    useForm(formStepsComponents);

  return (
    <>
      <header>
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avliar o produto
        </p>
      </header>

      <div className="form-container">
        <Steps currentStep={currentStep} />

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>

          {/* Button actions */}
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
