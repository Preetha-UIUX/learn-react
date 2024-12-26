import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmitForm = (formData) => {
    console.log("formData", formData);
    reset()
  };
  return (
    <div>
      <h2>React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: true,
            })}
            name="email"
            type="email"
          />
          {errors.email && errors.email.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>
              Email is Required
            </p>
          ) : null}
        </div>
        <div>
          <label>Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            name="password"
            type="password"
          />
          {errors.password && errors.password.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>Password is required</p>
          ) : null}
          {errors.password && errors.password.type === "minLength" ? (
            <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>Password should be minimum of 8 char!</p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactHookForm;
