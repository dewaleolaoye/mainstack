import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { AbsoluteCenter, Button as ChakraButton, Span, Spinner } from '@chakra-ui/react';
import * as React from 'react';

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { loading, disabled, loadingText, children, ...rest } = props;

  return (
    <ChakraButton
      ref={ref}
      disabled={loading || disabled}
      position='relative'
      overflow='hidden'
      borderRadius='100px'
      bg='#131316'
      outline='unset'
      minH='52px'
      border='1px solid'
      padding='10px 16px'
      borderColor='#131316'
      color='#fff'
      fontWeight='600'
      transition='all 0.3s ease'
      _hover={{
        borderColor: 'pitch.100',
        color: '#fff',
        _before: {
          left: 0,
        },
      }}
      _focusVisible={{
        outline: '1px solid #131316',
      }}
      _disabled={{
        bg: '#DBDEE5',
        color: '#fff',
        border: 'none',
      }}
      {...rest}
    >
      {loading && !loadingText ? (
        <>
          <AbsoluteCenter display='inline-flex'>
            <Spinner
              size='inherit'
              color='inherit'
            />
          </AbsoluteCenter>
          <Span opacity={0}>{children}</Span>
        </>
      ) : loading && loadingText ? (
        <>
          <Spinner
            size='inherit'
            color='inherit'
          />
          {loadingText}
        </>
      ) : (
        children
      )}
    </ChakraButton>
  );
});
