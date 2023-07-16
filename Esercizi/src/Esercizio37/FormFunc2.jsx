import { useForm } from "./useForm";

export const FormFunc2 = () => {
  const { form, handleInputChange } = useForm();

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
    </div>
  );
};
