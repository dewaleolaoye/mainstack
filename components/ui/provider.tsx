'use client';

import { ChakraProvider as CProvider } from '@chakra-ui/react';
import { type ColorModeProviderProps } from './color-mode';
import { system } from '@/theme';

export function ChakraProvider(props: ColorModeProviderProps) {
  return <CProvider value={system}>{props.children}</CProvider>;
}
