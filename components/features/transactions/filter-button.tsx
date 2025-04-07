import { Box, Center, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface Props {
  count: number;
}
const FilterButton = ({ count }: Props) => {
  return (
    <>
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

          {count >= 1 && (
            <Center
              bg='#131316'
              borderRadius='100px'
              width='20px'
              height='20px'
            >
              <Text
                color='#fff'
                fontSize='12px'
                fontWeight='500'
              >
                {count}
              </Text>
            </Center>
          )}

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
    </>
  );
};

export default FilterButton;
