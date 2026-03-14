import styles from "./styles.module.css";
interface Steps {
  heading: string;
  fields: string[];
}
interface StepIndicatorProps {
  steps: Steps[];
  activeStep: number;
}

function StepIndicator({ steps, activeStep }: StepIndicatorProps) {
  return (
    <div className={styles.mutliStepFormPages}>
      {steps.map((_, i) => (
        <div className={styles.pages} key={i}>
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
