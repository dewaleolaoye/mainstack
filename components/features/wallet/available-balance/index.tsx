'use client';
import { Flex } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { useGetWalletQuery } from '@/store/request';
import AmountCard from '../amount-card';

const AvailableBalance = () => {
  const { data, isSuccess } = useGetWalletQuery({});

  return (
    <Flex
      alignItems='center'
      gap='48px'
      maxWidth='465px'
      width='100%'
      mb='24px'
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
  );
};

export default AvailableBalance;
