import { Button, CloseButton, Drawer, DrawerTrigger, Flex, Text } from '@chakra-ui/react';
import FilterButton from './filter-button';
import FilterDateCard from './filter-date-card';

const FilterTransactions = () => {
  const filters = [
    {
      title: 'Today',
      value: 'today',
    },
    {
      title: 'Last 7 days',
      value: 'last-7-days',
    },
    {
      title: 'This month',
      value: 'this-month',
    },
    {
      title: 'Last 3 months',
      value: 'last-3-months',
    },
  ];
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
              <Flex gap='8px'>
                {filters.map(({ title, value }) => (
                  <FilterDateCard
                    key={title}
                    title={title}
                    onClick={() => console.log(value)}
                  />
                ))}
              </Flex>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant='outline'>Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save</Button>
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
