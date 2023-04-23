import { ForwardRefRenderFunction, forwardRef as ReactForwardRef } from 'react';
import { As, PropsOf, RightJoinProps } from './types';

export function forwardRef<Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >
) {
  return ReactForwardRef(component) as unknown as ForwardRefRenderFunction<
    Component,
    Props
  >;
}
