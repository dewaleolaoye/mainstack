import { Avatar as ChakraAvatar, AvatarRootProps } from '@chakra-ui/react';
import React from 'react';

interface Props extends AvatarRootProps {
  name: string;
}
const Avatar = ({ name, ...props }: Props) => {
  return (
    <ChakraAvatar.Root
      background='linear-gradient(to right, #5C6670 , #131316)'
      width='32px'
      height='32px'
      {...props}
    >
      <ChakraAvatar.Fallback
        name={name}
        color='#fff'
        fontWeight='600'
      />
    </ChakraAvatar.Root>
  );
};

export default Avatar;
