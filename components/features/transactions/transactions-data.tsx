'use client';
import { useGetTransactionsQuery } from '@/store/request';
import { Box, Flex, Text } from '@chakra-ui/react';
import FilterTransactions from './filter-transactions';
import ExportList from './export-list';
import TransactionCard from './transaction-card';
import Loader from '@/components/common/loader';

const TransactionsData = () => {
  const { data, isSuccess, isLoading } = useGetTransactionsQuery({});

  return (
    <Box>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        mb='32px'
        borderBottom='1px solid #EFF1F6'
        pb='24px'
      >
        <Box>
          <Text
            fontSize={{ base: '24px' }}
            letterSpacing='-0.6px'
            fontWeight='700'
          >
            {isSuccess ? data?.length : 0} Transactions
          </Text>

          <Text
            fontWeight='500'
            fontSize='14px'
            color='#56616B'
            letterSpacing='-0.2px'
          >
            Your transactions for the last 7 days
          </Text>
        </Box>

        <Box>
          <Flex gap={{ base: '16px' }}>
            <FilterTransactions />

            <ExportList />
          </Flex>
        </Box>
      </Flex>

      <Box>
        {isLoading && <Loader />}

        {data?.map((transaction, index) => (
          <TransactionCard
            key={`${transaction.payment_reference}-${index}`}
            transaction={transaction}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TransactionsData;
