import useReferences from 'hooks/useButtonReferences';
import { createContext, useContext, useState } from 'react';

interface IAutocompleteContext {
  value: string;
  setDisplayedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  showOptions: boolean;
  displayedOptions: string[];
  options: string[];
  allOptions: string[];
  handleOptions: (value: string) => void;
  elements: HTMLElement[];
  setElements: React.Dispatch<React.SetStateAction<HTMLElement[]>>;
}

interface IAutocompleteProviderProps {
  children: React.ReactNode;
}

const AutocompleteContext = createContext<IAutocompleteContext>(
  {} as IAutocompleteContext
);

export const AutocompleteProvider = ({
  children,
}: IAutocompleteProviderProps) => {
  const [value, setValue] = useState('');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>([]);
  const [allOptions, setAllOptions] = useState<string[]>([]);
  const [displayedOptions, setDisplayedOptions] = useState<string[]>([]);
  const [elements, setElements] = useReferences();

  console.log(showOptions);

  const handleOptions = (value: string) => {
    setOptions((prevState) => [...prevState, value]);
    setAllOptions((prevState) => [...prevState, value]);
    setDisplayedOptions((prevState) => [...prevState, value]);
  };

  return (
    <AutocompleteContext.Provider
      value={{
        elements,
        setElements,
        displayedOptions,
        setDisplayedOptions,
        value,
        allOptions,
        setValue,
        showOptions,
        setShowOptions,
        options,
        handleOptions,
      }}
    >
      {children}
    </AutocompleteContext.Provider>
  );
};

export const useAutocomplete = () => {
  const context = useContext(AutocompleteContext);

  if (!context) throw new Error('Autocompe');

  return context;
};
