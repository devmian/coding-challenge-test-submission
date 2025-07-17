import { useState } from "react";
import { FormFields } from "src/App";

export default function useFormFields(initialValues: FormFields) {
  const [fields, setFields] = useState<FormFields>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const resetFields = () => {
    setFields(initialValues);
  };

  return {
    fields,
    handleChange,
    resetFields,
  };
}