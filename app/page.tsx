import { Box, Flex } from '@chakra-ui/react';
import WalletAmount from '@/components/features/wallet/wallet-amount';
import Charts from '@/components/features/chart/charts';
import AvailableBalance from '@/components/features/wallet/available-balance';
import TransactionsData from '@/components/features/transactions/transactions-data';

export default function Home() {
  return (
    <Box>
      <Flex
        gap={{ base: '48px' }}
        mb={{ base: '64px' }}
      >
        <Box
          width='100%'
          maxWidth='965px'
        >
          <AvailableBalance />

          <Charts />
        </Box>

        <Box
          maxW='271px'
          width='100%'
        >
          <WalletAmount />
        </Box>
      </Flex>

      <TransactionsData />
    </Box>
  );
}
