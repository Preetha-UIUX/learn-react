const CommonInput = ({ label, type, name, id, value, placeholder, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        placeholder={placeholder || "Enter Value here"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonInput;
