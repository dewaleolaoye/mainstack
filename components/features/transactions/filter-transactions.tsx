'use client';
import { Box, CloseButton, Drawer, DrawerTrigger, Flex, Text, VStack } from '@chakra-ui/react';
import FilterButton from './filter-button';
import FilterDateCard from './filter-date-card';
import TransactionFilterSelect from './TransactionFilterSelect';
import { Button } from '@/components/ui/button';
import { filterList, transactionStatusList, transactionTypeList } from '@/constants';
import { useState } from 'react';
import DatePicker from '@/components/common/navbar/date-picker';

const FilterTransactions = () => {
  const [transactionType, setTransactionType] = useState<string[]>([]);
  const [transactionStatus, setTransactionStatus] = useState<string[]>([]);

  console.log({ transactionStatus, transactionType });

  const isDisabled = transactionType.length === 0 && transactionStatus.length === 0;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  return (
    <>
      <Drawer.Root
        size='md'
        preventScroll
      >
        <DrawerTrigger>
          <FilterButton count={3} />
        </DrawerTrigger>

        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            borderRadius='20px'
            padding='20px'
            maxW='456px'
          >
            <Text
              fontWeight='700'
              fontSize='24px'
              mb='32px'
            >
              Filter
            </Text>

            <Drawer.Body>
              <VStack
                alignItems='revert-layer'
                gap='24px'
              >
                <Flex gap='8px'>
                  {filterList.map(({ title, value }) => (
                    <FilterDateCard
                      key={title}
                      title={title}
                      onClick={() => console.log(value)}
                    />
                  ))}
                </Flex>

                <Box>
                  <Text
                    fontWeight='600'
                    fontSize='16px'
                    mb='8px'
                  >
                    Date Range
                  </Text>

                  <Flex gap='8px'>
                    <DatePicker
                      selected={startDate}
                      onChange={handleStartDateChange}
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={handleEndDateChange}
                    />
                  </Flex>
                </Box>

                <TransactionFilterSelect
                  name='Transaction Type'
                  items={transactionTypeList}
                  onValueChange={({ value }) => setTransactionType(value)}
                  defaultValue={transactionType}
                />

                <TransactionFilterSelect
                  name='Transaction Status'
                  items={transactionStatusList}
                  onValueChange={({ value }) => setTransactionStatus(value)}
                  defaultValue={transactionStatus}
                />
              </VStack>
            </Drawer.Body>

            <Drawer.Footer width='100%'>
              <Drawer.ActionTrigger asChild>
                <Button
                  variant='outline'
                  width='48%'
                  bg='#fff'
                  border='1px solid #EFF1F6'
                  color='#131316'
                  _hover={{}}
                >
                  Clear
                </Button>
              </Drawer.ActionTrigger>

              <Button
                width='48%'
                disabled={isDisabled}
              >
                Apply
              </Button>
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size='sm' />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};

export default FilterTransactions;
