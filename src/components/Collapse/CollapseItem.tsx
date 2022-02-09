import CollapseContent from './CollapseContent';
import { PlusIcon, MinusIcon } from '@modulz/radix-icons';
import { useCollapse } from './CollapseContext';
import { CollapseItemContainer, CollapseItemTrigger } from './styles';

interface ICollapseItemProps {
  value: string;
  title: string;
  children: React.ReactNode;
}

function CollapseItem({ children, title, value }: ICollapseItemProps) {
  const { handleCollapse, contentOpened, collapseType } = useCollapse();

  const isCollapseActive = contentOpened.includes(value);

  return (
    <CollapseItemContainer>
      <CollapseItemTrigger
        variant={collapseType}
        type="button"
        active={isCollapseActive}
        onClick={() => handleCollapse(value)}
      >
        {title}
        {isCollapseActive ? <MinusIcon /> : <PlusIcon />}
      </CollapseItemTrigger>
      <CollapseContent value={value}>{children}</CollapseContent>
    </CollapseItemContainer>
  );
}

export default CollapseItem;
