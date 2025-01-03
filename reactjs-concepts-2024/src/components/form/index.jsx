import { useState } from "react";
const initialState = {
  name: "",
  email: "",
};
const FormComponent = () => {
  //   const [nameValue, setNameValue] = useState("");
  //   const [emailValue, setEmailValue] = useState("");

  //   const handleInputChange = (e) => {
  //     setNameValue(e.target.value)
  //   }

  //   const handleEmailChange = (e) => {
  //     setEmailValue(e.target.value)
  //   }

  const [formData, setFormData] = useState(initialState);
  const handleOnChange = (e) => {
    console.log("type", e.target.name);
    // const {name, value} = e.target;
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log("formData", formData);

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleOnChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
