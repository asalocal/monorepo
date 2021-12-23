import { createContext, useCallback, useContext, useState } from 'react';

interface IModalContext {
  isOpen: boolean;
  openModal: (shouldOpen: boolean, options?: Record<string, string>) => void;
  options: Record<string, string>;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState({});

  const openModal = useCallback(
    (shouldOpen: boolean, options?: Record<string, string>) => {
      setIsOpen(shouldOpen);

      if (options) {
        setOptions(options);
      }
    },
    []
  );

  return (
    <ModalContext.Provider value={{ isOpen, openModal, options }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
