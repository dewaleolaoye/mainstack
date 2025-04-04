'use client';
import { navbarLinks } from '@/constants';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Box
      padding={{ base: '2px 10px 8px 16px' }}
      border='2px solid #fff'
      borderRadius='100px'
      boxShadow='0px 2px 4px 0px #2D3B430D, 0px 2px 6px 0px #2D3B430F'
      as='nav'
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
            return (
              <Link
                key={title}
                href={href}
              >
                <Flex
                  alignItems='center'
                  gap='8px'
                  color='#56616B'
                  justifyContent='center'
                  padding={{ base: '8px 18px' }}
                  borderRadius='100px'
                  transition='all 0.5s ease-in'
                  _hover={{
                    bg: '#EFF1F6',
                  }}
                >
                  <Icon
                  // stroke={isActive ? '#fff' : '#00050A'}
                  />

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

          <Flex
            bg='#EFF1F6'
            padding='4px 4px'
            borderRadius='100px'
            w='81px'
            gap={{ base: '8px' }}
            cursor='pointer'
          >
            <Avatar.Root
              background='linear-gradient(to right, #5C6670 , #131316)'
              width='32px'
              height='32px'
            >
              <Avatar.Fallback
                name='Shane Nelson'
                color='#fff'
                fontWeight='600'
              />
            </Avatar.Root>

            <Image
              src='/svgs/menu.svg'
              alt='menu'
              width={24}
              height={24}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
