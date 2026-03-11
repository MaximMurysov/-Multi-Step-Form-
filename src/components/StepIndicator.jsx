import styles from "./styles.module.css";

function StepIndicator({ steps, activeStep }) {
  return (
    <div className={styles.mutliStepFormPages}>
      {steps.map((_, i) => (
        <div className={styles.pages}>
          <div
            className={`${activeStep >= i ? styles.active : styles.innactive} `}
          >
            {i + 1}
          </div>
          {i !== steps.length - 1 && (
            <div
              className={` ${i <= activeStep ? styles.lineActive : styles.lineInnactive}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
export default StepIndicator;
