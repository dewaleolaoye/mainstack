import { Box, Flex } from '@chakra-ui/react';
import WalletAmount from '@/components/features/wallet/wallet-amount';
import Charts from '@/components/features/chart/charts';
import AvailableBalance from '@/components/features/wallet/available-balance';

export default function Home() {
  return (
    <Box>
      <Flex
        // justifyContent=''
        gap={{ base: '48px' }}
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
    </Box>
  );
}
