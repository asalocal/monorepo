import { createContext, useState, useCallback, useContext } from 'react';

interface IProfileCardProviderProps {
  children: React.ReactNode;
}

interface IPositions {
  x: number;
  y: number;
}

interface IProfileCardContext {
  positions: IPositions;
  registerPositions: (positions: IPositions) => void;
}

export const ProfileCardContext = createContext<IProfileCardContext>(
  {} as IProfileCardContext
);

export const ProfileCardProvider = ({
  children,
}: IProfileCardProviderProps) => {
  const [positions, setPositions] = useState<IPositions>({} as IPositions);

  const registerPositions = useCallback((positions: IPositions) => {
    setPositions(positions);
  }, []);

  return (
    <>
      <ProfileCardContext.Provider
        value={{
          positions,
          registerPositions,
        }}
      >
        {children}
      </ProfileCardContext.Provider>
    </>
  );
};

export const useProfileCard = () => {
  const context = useContext(ProfileCardContext);

  if (!context) {
    throw new Error('useProfileCard must be used within a ProfileCardProvider');
  }

  return context;
};
