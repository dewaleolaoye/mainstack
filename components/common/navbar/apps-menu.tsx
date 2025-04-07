'use client';
import React, { useState } from 'react';
import NavTab from './nav-tab';
import { Box, Flex, Menu, MenuTrigger, Text } from '@chakra-ui/react';
import { AppSVG } from '@/public/svgs';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import MenuItem from './menu-item';
import { useRouter } from 'next/navigation';

const AppsMenu = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleRoute = (path: string) => {
    router.push(`/${path}`);
    setOpen(false);
  };

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
          <NavTab
            icon={AppSVG}
            isActive={open}
            title='Apps'
          >
            {open && (
              <Flex gap='8px'>
                <Text
                  lineHeight='24px'
                  letterSpacing='-0.4px'
                  fontWeight='600'
                >
                  Link in Bio
                </Text>

                <Image
                  src='/svgs/arrow-down-white.svg'
                  alt='arrow down'
                  width={20}
                  height={20}
                />
              </Flex>
            )}
          </NavTab>
        </MenuTrigger>

        <Menu.Positioner mt='6px'>
          <Menu.Content
            padding='8px'
            minW='325px'
            border='1px solid #fff'
            boxShadow='0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)'
          >
            {sidebarLinks.map(({ description, href, name, src }) => {
              return (
                <MenuItem
                  key={name}
                  title={name}
                  description={description}
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

export default AppsMenu;
