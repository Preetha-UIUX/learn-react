import CommonInput from "../common-input/CommonInput";

const formType = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({ formControls = [], OnHandleSubmit, formData, setFormData, buttonText }) => {
  const renderFormElement = (getCurrentElement) => {
    let content = null;
    switch (getCurrentElement?.componentType) {
      case formType.INPUT:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(e) => setFormData({
              ...formData,
              [e.target.name] : e.target.value,
            })}
          />
        );
        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(e) => setFormData({
              ...formData,
              [e.target.name] : e.target.value,
            })}
          />
        );
        break;
    }
    return content;
  };

  return (
    <form onSubmit={OnHandleSubmit}>
      {formControls?.length > 0
        ? formControls.map((singleFormElement) =>
            renderFormElement(singleFormElement)
          )
        : null}
        <div style={{marginTop: '12px'}}>
          <button type="submit">{buttonText || 'Submit'}</button>
        </div>
    </form>
  );
};

export default CommonForm;
