import { useEffect, useLayoutEffect } from 'react';

export const useLayoutEffectSSR =
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
    ? useLayoutEffect
    : useEffect;
