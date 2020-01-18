import { useState } from "react";

export const useInputChange = () => {
  const [input, setInput] = useState();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value
    });

  return [input, handleInputChange];
};
