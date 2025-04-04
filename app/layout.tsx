import type { Metadata } from 'next';
import './globals.css';
import LayoutWrapper from '@/components/common/layout-wrapper';

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
          <LayoutWrapper>{children}</LayoutWrapper>
        </main>
      </body>
    </html>
  );
}
