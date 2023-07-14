import { useState } from "react";

export const FormFunc = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((form) => {
      return {
        ...form,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleInputChange}
      />
      <input
        type="checkbox"
        name="remember"
        checked={form.remember}
        onChange={handleInputChange}
      />
    </div>
  );
};
