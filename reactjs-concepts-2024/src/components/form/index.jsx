import { useState } from "react";

const FormComponent = () => {
//   const [nameValue, setNameValue] = useState("");
//   const [emailValue, setEmailValue] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

//   const handleInputChange = (e) => {
//     setNameValue(e.target.value)
//   }

//   const handleEmailChange = (e) => {
//     setEmailValue(e.target.value)
//   }

  const handleOnChange = (e) => {
    console.log('type', e.target.name);
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('nameValue', nameValue, emailValue)
  }
  console.log('formData', formData);
  
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
