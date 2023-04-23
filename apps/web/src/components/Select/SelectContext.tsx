import useHandleScroll from 'hooks/useHandleScroll';
import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState,
} from 'react';

interface SelectProviderProps {
  children: React.ReactNode;
}

interface SelectContextData {
  selected: string | React.ReactNode;
  option: string | number;
  active: boolean;
  isOpen: boolean;
  handleSelect: (value: string | number) => void;
  handleOpen: (state?: boolean) => void;
  setIsOpen: (state: boolean) => void;
  handleOption: (value: string | number) => void;
  handleSelected: (value: string | React.ReactNode) => void;
}

const SelectContext = createContext<SelectContextData>({} as SelectContextData);

export const SelectProvider = ({ children }: SelectProviderProps) => {
  const [selected, setSelected] = useState<string | React.ReactNode>('');
  const [option, setOption] = useState<string | number>('');
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(
    (state?: boolean) => {
      setIsOpen(state ? state : !isOpen);
      setActive(state ? state : !active);
    },
    [isOpen, active]
  );

  const handleSelect = useCallback((value: string | number) => {
    setSelected(value);
    setOption(value);
    setIsOpen(false);
    setActive((prevState) => !prevState);
  }, []);

  const handleSelected = useCallback((value: string | React.ReactNode) => {
    setSelected(value);
  }, []);

  const handleOption = useCallback((value: string | number) => {
    setOption(value);
  }, []);

  const handleCloseSelectOnScroll = useCallback(() => {
    setIsOpen(false);
    setActive(false);
  }, []);

  useHandleScroll(handleCloseSelectOnScroll);

  return (
    <SelectContext.Provider
      value={{
        handleOption,
        handleSelected,
        selected,
        active,
        isOpen,
        option,
        setIsOpen,
        handleOpen,
        handleSelect,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

export const useSelect = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('useSelect must be used within a SelectProvider');
  }

  return context;
};
