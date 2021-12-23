import { createContext, useCallback, useContext, useState } from 'react';

interface DropdownContextData {
  positions: Positions;
  handleSetPositions: (positions: Positions) => void;
}

interface DropdownProviderProps {
  children: React.ReactNode;
}

interface Positions {
  x: number;
  y: number;
}

const DropdownContext = createContext<DropdownContextData>(
  {} as DropdownContextData
);

export const DropdownProvider = ({ children }: DropdownProviderProps) => {
  const [positions, setPositions] = useState<Positions>({} as Positions);

  const handleSetPositions = useCallback((positions: Positions) => {
    setPositions(positions);
  }, []);

  return (
    <DropdownContext.Provider value={{ positions, handleSetPositions }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }

  return context;
};
