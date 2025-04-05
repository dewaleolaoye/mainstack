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
        <Box
          maxWidth='1440px'
          width='100%'
          mx='auto'
        >
          <Navbar />

          <Flex gap={{ base: '48px' }}>
            <Sidebar />

            <Box
              minH={{ base: '86vh' }}
              width='100%'
              maxWidth={{ base: '1159px', '2xl': '1250px' }}
              mx='auto'
            >
              {children}
            </Box>
          </Flex>
        </Box>
      </ChakraProvider>
    </Provider>
  );
};

export default LayoutWrapper;
