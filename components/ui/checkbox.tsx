import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  // root: CheckboxRootProps;
}
const Checkbox = ({ children }: Props) => {
  return (
    <ChakraCheckbox.Root
      variant='solid'
      padding='14px'
      _hover={{
        bg: '#EFF1F6',
        borderRadius: '8px',
      }}
      // {...root}
    >
      <ChakraCheckbox.HiddenInput />
      <ChakraCheckbox.Control
        borderRadius='4px'
        padding='2px'
      />
      <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
    </ChakraCheckbox.Root>
  );
};

export default Checkbox;
