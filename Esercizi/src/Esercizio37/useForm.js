import { useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((form) => {
      return {
        ...form,
        [name]: value,
      };
    });
  };

  return { form, handleInputChange };
};
