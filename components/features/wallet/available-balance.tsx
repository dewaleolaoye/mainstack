'use client';
import { Box, Flex } from '@chakra-ui/react';
import AmountCard from './amount-card';
import { Button } from '@/components/ui/button';
import { useGetWalletQuery } from '@/store/request';

const AvailableBalance = () => {
  const { data, isSuccess } = useGetWalletQuery({});
  console.log(data, 'THE DATA');

  return (
    <Box>
      <Flex
        alignItems='center'
        gap='48px'
        maxWidth='465px'
        width='100%'
      >
        <AmountCard
          amount={isSuccess ? data?.balance : 0}
          title='Available Balance'
          amountProps={{
            fontSize: '36px',
            letterSpacing: '-1.5px',
          }}
          hideInfo
        />

        <Button width='167px'>Withdraw</Button>
      </Flex>
    </Box>
  );
};

export default AvailableBalance;
