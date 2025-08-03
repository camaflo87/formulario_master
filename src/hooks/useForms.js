import { useState } from "react";

const useForms = (initialValues, onValidate) => {
  const [form, setForm] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = onValidate(form);

    if (err === null) {
      console.log("Enviando formulario");
    } else {
      setErrors(err);
    }
  };

  return {
    form,
    errors,
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useForms;
