import { Box, BoxProps, Text } from '@chakra-ui/react';

interface Props extends BoxProps {
  title: string;
}
const FilterDateCard = ({ title, ...props }: Props) => {
  return (
    <Box
      border='1px solid #EFF1F6'
      borderRadius='100px'
      padding='10px 18px'
      bg='#fff'
      transition='all 0.2s ease-in-out'
      cursor='pointer'
      _hover={{
        bg: '#F5F6FA',
      }}
      {...props}
    >
      <Text
        fontSize='14px'
        fontWeight='600'
        letterSpacing='-0.4px'
        textAlign='center'
        lineHeight='16px'
      >
        {title}
      </Text>
    </Box>
  );
};

export default FilterDateCard;
