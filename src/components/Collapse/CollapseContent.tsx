import { useCollapse } from './CollapseContext';
import { CollapseContentContainer } from './styles';

interface ICollpaseContentProps {
  children: React.ReactNode;
  value: string;
}

function CollapseContent({ children, value }: ICollpaseContentProps) {
  const { contentOpened } = useCollapse();

  return (
    <>
      <CollapseContentContainer active={contentOpened.includes(value)}>
        {children}
      </CollapseContentContainer>
    </>
  );
}

export default CollapseContent;
