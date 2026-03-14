import React, { type ChangeEvent } from "react";
import styles from "./styles.module.css";

interface FormStepProps {
  steps: { heading: string; fields: string[] }[];
  activeStep: number;
  formData: Record<string, string>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnter: (e: React.KeyboardEvent<HTMLElement>) => void;
}

function FormStep({
  steps,
  activeStep,
  formData,
  handleChange,
  handleEnter,
}: FormStepProps) {
  return (
    <div className={styles.formData}>
      <h2>{steps[activeStep].heading}</h2>
      {steps[activeStep].fields.map((elem, i) => (
        <div key={i}>
          <p>{elem}</p>
          <input
            type="text"
            name={elem}
            className={styles.input}
            value={formData[elem] || ""}
            onChange={handleChange}
            onKeyDown={handleEnter}
          />
        </div>
      ))}
    </div>
  );
}
export default FormStep;
