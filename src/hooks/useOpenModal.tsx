import { useState } from 'react';

type IOpenModal = [boolean, (value: boolean) => void];

function useOpenModal(): IOpenModal {
  const [open, setOpen] = useState(false);

  return [open, setOpen];
}

export default useOpenModal;
