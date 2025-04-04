'use client';
import { useGetWalletQuery } from '@/store/request';
import { Box, VStack } from '@chakra-ui/react';
import AmountCard from './amount-card';

const WalletAmount = () => {
  const { data, isSuccess } = useGetWalletQuery({});
  return (
    <Box>
      <VStack
        alignItems='revert-layer'
        gap='24px'
      >
        <AmountCard
          title='Ledger Balance'
          amount={isSuccess ? data?.ledger_balance : 0}
        />

        <AmountCard
          title='Total Payout'
          amount={isSuccess ? data?.total_payout : 0}
        />

        <AmountCard
          title='Total Revenue'
          amount={isSuccess ? data?.total_revenue : 0}
        />

        <AmountCard
          title='Pending Payout'
          amount={isSuccess ? data?.pending_payout : 0}
        />
      </VStack>
    </Box>
  );
};

export default WalletAmount;
