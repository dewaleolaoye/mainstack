import { Box, BoxProps, Flex, Text, TextProps } from '@chakra-ui/react';
import Image from 'next/image';

interface Props extends BoxProps {
  title: string;
  amount: number;
  amountProps?: TextProps;
  children?: React.ReactNode;
  hideInfo?: boolean;
}
const AmountCard = ({ title, amount, amountProps, hideInfo, ...props }: Props) => {
  return (
    <Box
      maxWidth='271px'
      width='100%'
      {...props}
    >
      <Flex
        justifyContent='space-between'
        alignItems='center'
        mb='4px'
      >
        <Text
          color='#56616B'
          fontSize={{ base: '14px' }}
          fontWeight='500'
        >
          {title}
        </Text>

        {!hideInfo && (
          <Image
            src='/svgs/info.svg'
            alt='info'
            width={16}
            height={16}
          />
        )}

        {/* {children ? (
          children
        ) : (
          <Image
            src='/svgs/info.svg'
            alt='info'
            width={16}
            height={16}
          />
        )} */}
      </Flex>

      <Text
        fontWeight='700'
        letterSpacing='-0.6px'
        color='#131316'
        fontSize={{ base: '28px' }}
        {...amountProps}
      >
        USD {formatNumber(amount)}
      </Text>
    </Box>
  );
};

export default AmountCard;

function formatNumber(value: number) {
  const formatted = value % 1 === 0 ? Number(value.toFixed(2)) : value;
  return formatted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
