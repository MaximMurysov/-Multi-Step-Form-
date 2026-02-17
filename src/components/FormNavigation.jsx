import styles from "./styles.module.css";

function FormNavigation({ resultForm, handleBack, handleNext, handleReset }) {
  return (
    <>
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
    </>
  );
}
export default FormNavigation;
