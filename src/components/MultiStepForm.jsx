import styles from "./styles.module.css";
import { useState } from "react";
import { steps } from "./main";

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
    setResultForm(false);
  };
  return (
    <div className={styles.mutliStep}>
      <div className={styles.mutliStepContainer}>
        <div className={styles.mutliStepForm}>
          <div className={styles.mutliStepFormPages}>
            {steps.map((_, i) => (
              <h1
                className={`${index >= i ? styles.active : styles.innactive} `}
              >
                {i + 1}
              </h1>
            ))}
          </div>
          {resultForm ? (
            <div>
              {Object.entries(formData).map(([key, elem]) => (
                <div key={key}>
                  <p>
                    {key}: {elem}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.formData}>
              <h2>{steps[index].heading}</h2>
              {steps[index].fields.map((elem, i) => (
                <div key={i}>
                  <p>{elem}</p>
                  <input
                    type="text"
                    name={elem}
                    className={styles.input}
                    value={formData[elem] || ""}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
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
