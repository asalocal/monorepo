import Flex from 'components/Flex';
import Portal from 'components/Portal';
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
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

  const handleMouseEnter = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      if (
        containerRef.current &&
        containerRef.current.contains(ev.target as Node)
      ) {
        handleProfileHover(true);
      }
    },
    [handleProfileHover]
  );

  const handleMouseLeave = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      handleProfileHover(false);
    },
    [handleProfileHover]
  );

  useEffect(() => {
    if (containerRef.current) {
      const { x, y } = containerRef.current.getBoundingClientRect();

      registerPositions({
        x,
        y,
      });
    }
  }, [registerPositions, containerRef]);

  return (
    <>
      <Flex
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
