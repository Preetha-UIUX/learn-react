import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../../config";

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState(initialState);

  const OnHandleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegisterFormData(initialState);
  }
  return (
    <div>
      <h1>Register</h1>
      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={'Register'}
        OnHandleSubmit={OnHandleRegisterSubmit}
      />
    </div>
  )
}

export default Register
