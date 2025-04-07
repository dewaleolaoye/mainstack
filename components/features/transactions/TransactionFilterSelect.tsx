'use client';
import { Box, createListCollection, SelectValueChangeDetails } from '@chakra-ui/react';
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select';
import Checkbox from '@/components/ui/checkbox';

interface Props {
  onValueChange?: (
    details: SelectValueChangeDetails<{
      label: string;
      value: string;
    }>
  ) => void;
  items: {
    label: string;
    value: string;
  }[];
  name: string;
  defaultValue: string[];
}
const TransactionFilterSelect = ({ onValueChange, items, name, defaultValue }: Props) => {
  const list = createListCollection({
    items,
  });

  return (
    <Box>
      <SelectRoot
        collection={list}
        name={name.toLowerCase()}
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        multiple
        required
      >
        <SelectLabel
          fontWeight='600'
          fontSize='16px'
          textTransform='capitalize'
        >
          {name}
        </SelectLabel>

        <SelectTrigger>
          <SelectValueText placeholder={name} />
        </SelectTrigger>

        <SelectContent p='8px '>
          {list.items.map((filter, index) => (
            <Checkbox
              // root={{
              //   onChange: (e) => console.log(e),
              // }}
              key={`${filter.value}-${index}`}
            >
              <SelectItem
                item={filter}
                key={`${filter.value}-${index}`}
              >
                {filter.label}
              </SelectItem>
            </Checkbox>
          ))}
        </SelectContent>
      </SelectRoot>
    </Box>
  );
};

export default TransactionFilterSelect;
