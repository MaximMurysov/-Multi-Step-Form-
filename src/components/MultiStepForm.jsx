import styles from "./styles.module.css";
import { useState } from "react";
import { steps } from "./main";
import StepIndicator from "./StepIndicator";
import FormResult from "./FormResult";
import FormStep from "./FormStep";
function MultiStepForm() {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [resultForm, setResultForm] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleNext = () => {
    const currentFields = steps[index].fields;
    const allCurrentFiels = currentFields.every(
      (elem) => formData[elem] && formData[elem].trim() !== "",
    );
    if (!allCurrentFiels) {
      return;
    }
    if (index < steps.length - 1) {
      setIndex(index + 1);
    } else {
      setResultForm(true);
    }
  };
  const handleBack = () => {
    setIndex(index >= 1 ? index - 1 : index);
  };
  const handleReset = () => {
    setFormData({});
    setIndex(0);
    setResultForm(false);
  };
  return (
    <div className={styles.mutliStep}>
      <div className={styles.mutliStepContainer}>
        <div className={styles.mutliStepForm}>
          <StepIndicator steps={steps} index={index} />
          {resultForm ? (
            <FormResult formData={formData} />
          ) : (
            <FormStep
              steps={steps}
              index={index}
              formData={formData}
              handleChange={handleChange}
            />
          )}
          {resultForm ? (
            <button className={styles.buttonNext} onClick={handleReset}>
              Try again
            </button>
          ) : (
            <div className={styles.activeButtons}>
              <button className={styles.buttonNext} onClick={handleBack}>
                Back
              </button>
              <button className={styles.buttonNext} onClick={handleNext}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default MultiStepForm;
