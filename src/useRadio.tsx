import { useState } from 'react';

const useRadio = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return {
    checked,
    handleChange,
  };
};

export default useRadio;
