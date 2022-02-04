import Flex from 'components/Flex';
import Portal from 'components/Portal';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ProfileCardProvider, useProfileCard } from './ProfileCardContext';
import Card from './Card';

interface IProfileCardProps {
  label: string | React.ReactNode;
  children: React.ReactNode;
}

function ProfileCard({ children, label }: IProfileCardProps) {
  return (
    <>
      <ProfileCardProvider>
        <ProfileCardWrapper label={label}>{children}</ProfileCardWrapper>
      </ProfileCardProvider>
    </>
  );
}

function ProfileCardWrapper({ children, label }: IProfileCardProps) {
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const { registerPositions } = useProfileCard();

  const handleProfileHover = useCallback((hover: boolean) => {
    if (hover === true) {
      setTimeout(() => {
        setIsProfileHovered(true);
      }, 1000);
      return;
    }

    setIsProfileHovered(false);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();

      registerPositions({
        x: left,
        y: top,
      });
    }
  }, [registerPositions, containerRef]);

  return (
    <>
      <Flex
        ref={containerRef}
        onMouseEnter={() => handleProfileHover(true)}
        onMouseLeave={() => handleProfileHover(false)}
        alignItems="center"
        css={{
          width: 'fit-content',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        {label}
      </Flex>
      {isProfileHovered && (
        <Portal>
          <Card>{children}</Card>
        </Portal>
      )}
    </>
  );
}

export default ProfileCard;
