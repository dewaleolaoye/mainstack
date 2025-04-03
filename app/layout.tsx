import type { Metadata } from 'next';
import './globals.css';
import { ChakraProvider } from '@/components/ui/provider';

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
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
