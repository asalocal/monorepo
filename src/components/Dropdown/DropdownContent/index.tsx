import { HTMLAttributes } from 'react';
import { DropdownContentContainer } from './styles';

interface DropdownContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function DropdownContent({ children, ...props }: DropdownContentProps) {
  return (
    <DropdownContentContainer {...props}>{children}</DropdownContentContainer>
  );
}

export default DropdownContent;
