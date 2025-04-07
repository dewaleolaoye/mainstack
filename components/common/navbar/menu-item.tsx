'use client';
import { Box, Center, Flex, Menu, MenuItemProps, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

interface Props extends MenuItemProps {
  title: string;
  src: string;
  description: string;
}
const MenuItem = ({ description, src, title, ...props }: Props) => {
  return (
    <Menu.Item
      mb='8px'
      padding='12px 8px'
      transition='all 0.2s ease-in'
      borderRadius='12px'
      cursor='pointer'
      _hover={{
        boxShadow: '0px 4px 4px 0px #5C738314',
        border: '1px solid #EFF1F6',
        bg: '#fff',
      }}
      {...props}
    >
      <Flex
        gap='8px'
        alignItems='center'
      >
        <Center
          width='40px'
          height='40px'
          borderRadius='8px'
          border='1px solid #EFF1F6'
        >
          <Image
            src={src}
            width={24}
            alt={title}
            height={24}
          />
        </Center>

        <Box>
          <Text
            fontSize='14px'
            fontWeight='600'
          >
            {title}
          </Text>

          {description && (
            <Text
              fontWeight='500'
              color='#56616B'
              fontSize='12px'
            >
              {description}
            </Text>
          )}
        </Box>
      </Flex>
    </Menu.Item>
  );
};
export default MenuItem;
