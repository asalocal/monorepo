import { useEffect } from 'react';
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
  const { handleCollapse, registerCollapse, contentOpened } = useCollapse();

  const isCollapseActive = contentOpened.includes(value);

  useEffect(() => {
    registerCollapse(value);
  }, [registerCollapse, value]);

  return (
    <CollapseItemContainer>
      <CollapseItemTrigger
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
