const InputField = ({ name, label, type, value, onChange, required }) => {
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      </>
    );
}
 
export default InputField;