import "./Formulario.css";
import useForms from "../hooks/useForms";

function Formulario() {
  const initialValues = {
    firtsname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const onValidate = (form) => {
    let isError = false;
    let errors = {};

    if (!form.firtsname.trim()) {
      errors.firtsname = "El campo Firts name no debe ser vacio";
      isError = true;
    }

    if (!form.lastname.trim()) {
      errors.lastname = "El campo apellido no debe ser vacio";
      isError = true;
    }

    if (!form.email.trim()) {
      errors.email = "El campo email no debe ser vacio";
      isError = true;
    }

    if (!form.password.trim()) {
      errors.password = "El campo password no debe ser vacio";
      isError = true;
    }

    return isError ? errors : null;
  };
  const { form, errors, handleChange, handleSubmit } = useForms(
    initialValues,
    onValidate
  );
  console.log(errors);
  return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          className={`${
            errors.firtsname ? "formulario__input--error" : "formulario__input"
          }`}
          placeholder="Firts name"
          value={form.firtsname}
          name="firtsname"
          onChange={handleChange}
        />
        {errors.firtsname && (
          <div className="formulario__errors">
            {errors.firtsname}
            <i className="fa-solid fa-circle-exclamation fa-solid--show"></i>
          </div>
        )}

        <input
          type="text"
          className={`${
            errors.firtsname ? "formulario__input--error" : "formulario__input"
          }`}
          placeholder="Last name"
          value={form.lastname}
          name="lastname"
          onChange={handleChange}
        />
        {errors.lastname && (
          <div className="formulario__errors">
            {errors.lastname}
            <i className="fa-solid fa-circle-exclamation fa-solid--show"></i>
          </div>
        )}
        <input
          type="email"
          className={`${
            errors.firtsname ? "formulario__input--error" : "formulario__input"
          }`}
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <div className="formulario__errors">
            {errors.email}
            <i className="fa-solid fa-circle-exclamation fa-solid--show"></i>
          </div>
        )}
        <input
          type="password"
          className={`${
            errors.firtsname ? "formulario__input--error" : "formulario__input"
          }`}
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && (
          <div className="formulario__errors">
            {errors.password}
            <i className="fa-solid fa-circle-exclamation fa-solid--show"></i>
          </div>
        )}
        <button type="submit" className="formulario__submit">
          CLAIM YOUR FREE TRIAL
        </button>
        <p>
          By clicking the button, you are agreeing to our
          <span className="formulario__terminos"> Terms and Services</span>
        </p>
      </form>
    </>
  );
}

export default Formulario;
