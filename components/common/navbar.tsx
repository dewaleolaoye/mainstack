'use client';
import { navbarLinks } from '@/constants';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavAvatar from './nav-avatar';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Box
      padding={{ base: '2px 10px 8px 16px' }}
      border='2px solid #fff'
      borderRadius='100px'
      boxShadow='0px 2px 4px 0px #2D3B430D, 0px 2px 6px 0px #2D3B430F'
      as='nav'
      mb='24px'
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
          {navbarLinks.map(({ href, src: Icon, title }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={title}
                href={href}
              >
                <Flex
                  alignItems='center'
                  gap='8px'
                  color={isActive ? '#fff' : '#56616B'}
                  justifyContent='center'
                  bg={isActive ? '#131316' : 'transparent'}
                  padding={{ base: '8px 18px' }}
                  borderRadius='100px'
                  transition='all 0.5s ease-in'
                  _hover={{
                    bg: isActive ? '#131316' : '#EFF1F6',
                  }}
                >
                  <Icon fill={isActive ? '#fff' : '#56616B'} />

                  <Text
                    lineHeight='24px'
                    letterSpacing='-0.4px'
                    fontWeight='600'
                  >
                    {title}
                  </Text>
                </Flex>
              </Link>
            );
          })}
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
