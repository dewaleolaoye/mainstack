'use client';
import { navbarLinks } from '@/constants';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavAvatar from './nav-avatar';
import NavTab from './nav-tab';
import AppsMenu from './apps-menu';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Box
      padding={{ base: '2px 10px 8px 16px' }}
      border='2px solid #fff'
      borderRadius='100px'
      boxShadow='0px 2px 4px 0px #2D3B430D, 0px 2px 6px 0px #2D3B430F'
      as='nav'
      mb={{ base: '48px' }}
      position='relative'
    >
      <Flex
        justifyContent='space-between'
        alignItems='center'
      >
        <Box width='200px'>
          <Link href='/'>
            <Image
              src='/svgs/logo.svg'
              width={36}
              height={36}
              alt='mainstack'
            />
          </Link>
        </Box>

        <Flex gap={{ base: '24px' }}>
          {navbarLinks.map(({ href, src, title }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={title}
                href={href}
              >
                <NavTab
                  icon={src}
                  isActive={isActive}
                  title={title}
                />
              </Link>
            );
          })}

          <AppsMenu />
        </Flex>

        <Flex
          gap={{ base: '32px' }}
          alignItems='center'
        >
          <Link href='/'>
            <Image
              src='/svgs/notifications.svg'
              width={20}
              height={20}
              alt='notifications'
            />
          </Link>

          <Link href='/'>
            <Image
              src='/svgs/chat.svg'
              width={20}
              height={20}
              alt='chat'
            />
          </Link>

          <NavAvatar />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
