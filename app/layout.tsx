import type { Metadata } from 'next';
import './globals.css';
import { ChakraProvider } from '@/components/ui/provider';
import Navbar from '@/components/common/navbar';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '@/components/common/sidebar';

export const metadata: Metadata = {
  title: 'Mainstack FE Test | Technical Assessment',
  description: 'Technical Assessment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <main>
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
        </main>
      </body>
    </html>
  );
}
