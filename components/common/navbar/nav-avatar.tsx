'use client';
import React, { useState } from 'react';
import { Box, Flex, Menu, MenuTrigger, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { profieLinks } from '@/constants';
import MenuItem from './menu-item';
import { useRouter } from 'next/navigation';
import { useGetUserQuery } from '@/store/request';
import Avatar from './avatar';

const NavAvatar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleRoute = (path: string) => {
    router.push(`/${path}`);
    setOpen(false);
  };

  const { data, isSuccess } = useGetUserQuery({});

  return (
    <Box>
      <Menu.Root
        open={open}
        onInteractOutside={() => setOpen(false)}
      >
        <MenuTrigger
          onClick={() => setOpen(!open)}
          _focus={{ outline: 'none' }}
        >
          <Flex
            bg='#EFF1F6'
            padding='4px 4px'
            borderRadius='100px'
            w='81px'
            gap={{ base: '8px' }}
            cursor='pointer'
          >
            <Avatar name={isSuccess ? `${data.first_name} ${data.last_name}` : ''} />

            <Image
              src='/svgs/menu.svg'
              alt='menu'
              width={24}
              height={24}
            />
          </Flex>
        </MenuTrigger>

        <Menu.Positioner mt='6px'>
          <Menu.Content
            padding='16px 8px'
            minW='325px'
            border='1px solid #fff'
            boxShadow='0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)'
          >
            <Flex
              gap='8px'
              alignItems='center'
              mb='8px'
              pl='8px'
            >
              <Avatar
                name={isSuccess ? `${data.first_name} ${data.last_name}` : ''}
                width='40px'
                height='40px'
              />

              <Box>
                <Text
                  fontWeight='600'
                  fontSize='16px'
                >
                  {data?.first_name} {data?.last_name}
                </Text>
                <Text
                  fontSize='14px'
                  fontWeight='500'
                  color='#56616B'
                >
                  {data?.email}
                </Text>
              </Box>
            </Flex>

            {profieLinks.map(({ href, name, src }) => {
              return (
                <MenuItem
                  key={name}
                  title={name}
                  description=''
                  src={src}
                  onClick={() => handleRoute(href)}
                  value={name}
                />
              );
            })}
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
};

export default NavAvatar;
