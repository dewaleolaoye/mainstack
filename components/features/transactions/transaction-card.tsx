import { ITransactions } from '@/interfaces';
import { formatDate } from '@/utils';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Status from './status';

interface Props {
  transaction: ITransactions;
}
const TransactionCard = ({ transaction }: Props) => {
  const { amount, date, metadata, status, type } = transaction;
  return (
    <Box mb='24px'>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        gap='16px'
      >
        <Flex
          gap='16px'
          alignItems='center'
        >
          <Center
            bg={type === 'deposit' ? '#E3FCF2' : '#F9E3E0'}
            borderRadius='100%'
            width='48px'
            height='48px'
          >
            <Image
              src={type === 'deposit' ? '/svgs/deposit-arrow.svg' : '/svgs/withdrawal-arrow.svg'}
              width={14}
              height={14}
              alt={type}
            />
          </Center>
          <Box>
            <Text
              lineHeight={{ base: '24px' }}
              fontSize={{ base: '16px' }}
              fontWeight='500'
              color='#131316'
              mb='6px'
              textTransform='capitalize'
            >
              {metadata?.name ? metadata.name : type}
            </Text>

            <Text
              lineHeight={{ base: '16px' }}
              fontSize={{ base: '14px' }}
              fontWeight='500'
              color='#56616B'
            >
              {metadata?.product_name ? metadata.product_name : <Status status={status} />}
            </Text>
          </Box>
        </Flex>

        <Box>
          <Text
            fontSize={{ base: '16px' }}
            lineHeight={{ base: '24px' }}
            fontWeight='700'
            letterSpacing='-0.4px'
            color='#131316'
            mb='6px'
            textAlign='right'
          >
            USD {amount}
          </Text>

          <Text
            fontSize={{ base: '14px' }}
            lineHeight={{ base: '16px' }}
            fontWeight='500'
            letterSpacing='-0.2px'
            color='#56616B'
          >
            {date ? formatDate(date) : 'N/A'}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TransactionCard;
