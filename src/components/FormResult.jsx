function FormResult({ formData }) {
  return (
    <div>
      {Object.entries(formData).map(([key, elem]) => (
        <div key={key}>
          <p>
            {key}: {elem}
          </p>
        </div>
      ))}
    </div>
  );
}
export default FormResult;
