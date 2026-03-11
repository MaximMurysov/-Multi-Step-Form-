import styles from "./styles.module.css";
import { useState } from "react";
import { steps } from "./main";
import StepIndicator from "./StepIndicator";
import FormResult from "./FormResult";
import FormStep from "./FormStep";
import FormNavigation from "./FormNavigation";
function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [resultForm, setResultForm] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleNext = () => {
    const currentFields = steps[activeStep].fields;
    const allCurrentFiels = currentFields.every(
      (elem) => formData[elem] && formData[elem].trim() !== "",
    );
    if (!allCurrentFiels) {
      return;
    }
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setResultForm(true);
    }
  };
  const handleBack = () => {
    setActiveStep(activeStep >= 1 ? activeStep - 1 : activeStep);
  };
  const handleReset = () => {
    setFormData({});
    setActiveStep(0);
    setResultForm(false);
  };
  return (
    <div className={styles.mutliStep}>
      <div className={styles.mutliStepContainer}>
        <div className={styles.mutliStepForm}>
          <StepIndicator steps={steps} activeStep={activeStep} />
          {resultForm ? (
            <FormResult formData={formData} />
          ) : (
            <FormStep
              steps={steps}
              activeStep={activeStep}
              formData={formData}
              handleChange={handleChange}
            />
          )}
          <FormNavigation
            resultForm={resultForm}
            handleBack={handleBack}
            handleReset={handleReset}
            handleNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
export default MultiStepForm;
