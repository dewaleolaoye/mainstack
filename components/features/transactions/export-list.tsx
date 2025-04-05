import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

const ExportList = () => {
  return (
    <Box
      bg='#EFF1F6'
      borderRadius='100px'
      padding='12px 20px'
      cursor='pointer'
      minW='107px'
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
          Export list
        </Text>

        <Box>
          <Image
            src='/svgs/download.svg'
            width={16}
            height={16}
            alt='arrow down'
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ExportList;
