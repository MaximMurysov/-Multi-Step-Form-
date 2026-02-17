import styles from "./styles.module.css";
function FormStep({ steps, index, formData, handleChange }) {
  return (
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
  );
}
export default FormStep;
