import { Box, Flex, Text } from '@chakra-ui/react';
import React, { ComponentType, SVGProps } from 'react';

interface Props {
  isActive: boolean;
  title: string;
  icon: ComponentType<SVGProps<SVGPathElement>>;
  children?: React.ReactNode;
}
const NavTab = ({ isActive, title, icon: Icon, children }: Props) => {
  return (
    <Flex
      alignItems='center'
      gap='8px'
      color={isActive ? '#fff' : '#56616B'}
      justifyContent='center'
      bg={isActive ? '#131316' : 'transparent'}
      padding={{ base: '8px 18px' }}
      borderRadius={'100px'}
      transition='all 0.5s ease-in'
      _hover={{
        bg: isActive ? '#131316' : '#EFF1F6',
      }}
      cursor='pointer'
    >
      <Icon fill={isActive ? '#fff' : '#56616B'} />

      <Text
        lineHeight='24px'
        letterSpacing='-0.4px'
        fontWeight='600'
      >
        {title}
      </Text>

      {children && <Box>{children}</Box>}
    </Flex>
  );
};

export default NavTab;
