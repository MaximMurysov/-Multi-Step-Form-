import styles from "./styles.module.css";

function StepIndicator({ steps, index }) {
  return (
    <div className={styles.mutliStepFormPages}>
      {steps.map((_, i) => (
        <h1 className={`${index >= i ? styles.active : styles.innactive} `}>
          {i + 1}
        </h1>
      ))}
    </div>
  );
}
export default StepIndicator;
