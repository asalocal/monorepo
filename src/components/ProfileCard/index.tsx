import Flex from 'components/Flex';
import { MouseEvent, useCallback, useRef, useState } from 'react';
import Card from './Card';

interface IProfileCardProps {
  label: string | React.ReactNode;
  children: React.ReactNode;
}

function ProfileCard({ children, label }: IProfileCardProps) {
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback((ev: MouseEvent<HTMLDivElement>) => {
    setIsProfileHovered(true);
  }, []);

  const handleMouseLeave = useCallback((ev: MouseEvent<HTMLDivElement>) => {
    if (
      (cardRef.current && cardRef.current.contains(ev.target as Node)) ||
      (containerRef.current && containerRef.current.contains(ev.target as Node))
    ) {
      setIsProfileHovered(false);
    }
  }, []);

  return (
    <>
      <Flex
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alignItems="center"
        css={{
          width: 'fit-content',
          position: 'relative',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        {label}

        <Card
          isActive={isProfileHovered}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={cardRef}
        >
          {children}
        </Card>
      </Flex>
    </>
  );
}

export default ProfileCard;
