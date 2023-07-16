import { useEffect, useRef, useState } from "react";

export const CarDetails = ({ initialData }) => {
  const [form, setForm] = useState({ model: "", year: 0, color: "" });
  const formRef = useRef();
  const [isFirstChange, setIsFirstChange] = useState(true);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const model = formRef.current?.elements.model.value;
    const year = formRef.current?.elements.year.value;
    const color = formRef.current?.elements.color.value;

    setForm((_form) => {
      return {
        ..._form,
        model: model,
        year: year,
        color: color,
      };
    });
  };

  const handleFormReset = () => {
    if (isFirstChange) {
      initialData.model = "";
      initialData.year = 0;
      initialData.color = "";
      setIsFirstChange(false);
    }
  };

  useEffect(() => {
    formRef.current.reset();
  }, [initialData]);

  return (
    <form ref={formRef} onSubmit={handleFormSubmit} onChange={handleFormReset}>
      <input type="text" name="model" defaultValue={initialData.model} />
      <input type="number" name="year" defaultValue={initialData.year} />
      <input type="text" name="color" defaultValue={initialData.color} />
      <button type="submit">Submit</button>
    </form>
  );
};
