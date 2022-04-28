import Flex from 'components/Flex';
import Portal from 'components/Portal';
import { MouseEvent, useCallback, useRef, useState } from 'react';
import { ProfileCardProvider, useProfileCard } from './ProfileCardContext';
import Card from './Card';
import { useLayoutEffectSSR } from 'components/system/useLayoutEffect';

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
  const cardRef = useRef<HTMLDivElement>(null);
  const { registerPositions } = useProfileCard();

  const handleMouseEnter = useCallback((ev: MouseEvent<HTMLDivElement>) => {
    setIsProfileHovered(true);
  }, []);

  const handleMouseLeave = useCallback((ev: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current && cardRef.current.contains(ev.target as Node)) {
      setIsProfileHovered(false);
    }
  }, []);

  useLayoutEffectSSR(() => {
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
          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
          >
            {children}
          </Card>
        </Portal>
      )}
    </>
  );
}

export default ProfileCard;
