import styles from "./styles.module.css";

interface FormNavigationProps {
  resultForm: boolean;
  handleBack: () => void;
  handleNext: () => void;
  handleReset: () => void;
}

function FormNavigation({
  resultForm,
  handleBack,
  handleNext,
  handleReset,
}: FormNavigationProps) {
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
