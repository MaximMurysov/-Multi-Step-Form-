import styles from "./styles.module.css";
import { useState } from "react";
import { steps } from "./main";

function MultiStepForm() {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.mutliStep}>
      <div className={styles.mutliStepContainer}>
        <div className={styles.mutliStepForm}>
          <div className={styles.mutliStepFormPages}>
            {steps.map((_, i) => (
              <h1 className={styles.page}>{i + 1}</h1>
            ))}
          </div>
          <h2>{steps[index].heading}</h2>
          {steps[index].fields.map((elem, i) => (
            <div key={i}>
              <p>{elem}</p>
              <input type="text" />
            </div>
          ))}
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
export default MultiStepForm;
