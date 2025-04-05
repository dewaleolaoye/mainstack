import { ITransactions } from '@/interfaces';
import { Text } from '@chakra-ui/react';

interface Props {
  status: ITransactions['status'];
}
const Status = ({ status }: Props) => {
  const mapStatus = {
    successful: {
      title: 'successful',
      color: '#0EA163',
    },
    pending: {
      title: 'pending',
      color: '#A77A07',
    },
  };

  return (
    <Text
      fontWeight='500'
      fontSize='14px'
      textTransform='capitalize'
      color={mapStatus[status].color}
    >
      {mapStatus[status].title}
    </Text>
  );
};

export default Status;
