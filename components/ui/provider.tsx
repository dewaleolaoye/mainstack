'use client';

import { Box, ChakraProvider as CProvider } from '@chakra-ui/react';
import { type ColorModeProviderProps } from './color-mode';
import { system } from '@/theme';

export function ChakraProvider(props: ColorModeProviderProps) {
  return (
    <CProvider value={system}>
      <Box padding='20px'>{props.children}</Box>
    </CProvider>
  );
}
