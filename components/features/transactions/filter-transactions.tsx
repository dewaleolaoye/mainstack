import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

const FilterTransactions = () => {
  return (
    <Box
      bg='#EFF1F6'
      borderRadius='100px'
      padding='12px 20px'
      cursor='pointer'
    >
      <Flex
        gap='8px'
        justifyContent='center'
        alignItems='center'
      >
        <Text
          letterSpacing='-0.4px'
          fontSize={{ base: '16px' }}
          fontWeight='600'
          lineHeight={{ base: '24px' }}
        >
          Filter
        </Text>

        <Box mt='2.5px'>
          <Image
            src='/svgs/arrow-down.svg'
            width={20}
            height={20}
            alt='arrow down'
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default FilterTransactions;
