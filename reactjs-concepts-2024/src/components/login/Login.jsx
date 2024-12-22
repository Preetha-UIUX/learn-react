import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginFormData, setLoginFormData] = useState(initialState);

  const OnHandleSubmit = (e) => {
    e.preventdefault();
    setLoginFormData(initialState);
  };

  return (
    <div>
      <h1>Login</h1>
      <CommonForm
        formControls={loginFormElements}
        formData={loginFormData}
        setFormData={setLoginFormData}
        buttonText={"Login"}
        OnHandleSubmit={OnHandleSubmit}
      />
    </div>
  );
};

export default Login;
