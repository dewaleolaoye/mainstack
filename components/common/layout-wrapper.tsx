'use client';
import { Box, Flex } from '@chakra-ui/react';
import ChakraProvider from '@/components/ui/provider';
import Navbar from '@/components/common/navbar';
import Sidebar from '@/components/common/sidebar';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

interface Props {
  children: React.ReactNode;
}
const LayoutWrapper = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Navbar />

        <Flex gap={{ base: '48px' }}>
          <Sidebar />

          <Box
            minH={{ base: '86vh' }}
            width='100%'
          >
            {children}
          </Box>
        </Flex>
      </ChakraProvider>
    </Provider>
  );
};

export default LayoutWrapper;
