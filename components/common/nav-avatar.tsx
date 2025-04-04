'use client';
import { useGetUserQuery } from '@/store/request';
import { Avatar, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const NavAvatar = () => {
  const { data, isSuccess } = useGetUserQuery({});
  return (
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
          name={isSuccess ? `${data.first_name} ${data.last_name}` : ''}
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
  );
};

export default NavAvatar;
