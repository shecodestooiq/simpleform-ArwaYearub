const TextAreaField = ({ name, label, value, onChange, required }) => {
  return (
  <>
  <label htmlFor={name}>{label}</label>
  <textarea name={name} value={value} onChange={onChange} required={required}/>
  </>
  );
};
 
export default TextAreaField;