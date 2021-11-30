import React, { ComponentPropsWithoutRef } from 'react';

export type As<Props = any> = React.ElementType<Props>;

export type RightJoinProps<T extends object = {}, U extends object = {}> = T &
  U;

export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
  as?: As;
};
