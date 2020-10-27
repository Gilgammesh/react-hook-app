import { useState } from "react";

export const useForm = (initialValues = {}) => {
  const [formValues, setForm] = useState(initialValues);

  const handleInputChange = ({ target: { name, value } }) => {
    setForm({
      ...formValues,
      [name]: value,
    });
  };

  return [formValues, handleInputChange];
};
