'use client';
import { Box, Flex, Text, Input } from '@chakra-ui/react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';

interface DatePickerProps {
  startDate: Date;
  endDate: Date;
  onChange: (dates: [Date | null, Date | null]) => void;
}

const CustomInput = forwardRef<HTMLInputElement, { value?: string; onClick?: () => void }>(
  ({ value, onClick }, ref) => (
    <Input
      ref={ref}
      value={value}
      onClick={onClick}
      readOnly
      border='2px solid #000'
      borderRadius='100px'
      p='12px 16px'
      width='200px'
      fontSize='14px'
      bg='transparent'
      cursor='pointer'
      _focus={{ outline: 'none' }}
    />
  )
);
CustomInput.displayName = 'CustomInput';

const DatePicker = ({ startDate, endDate, onChange }: DatePickerProps) => {
  return (
    <Box>
      <Text
        mb={4}
        fontWeight='600'
      >
        Date Range
      </Text>
      <Flex gap={4}>
        <ReactDatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          dateFormat='dd MMM yyyy'
          showPopperArrow={false}
          customInput={<CustomInput />}
        />

        <Box
          bg='#F8F9FA'
          borderRadius='100px'
          p='12px 16px'
          width='200px'
          fontSize='14px'
        >
          {endDate.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </Box>
      </Flex>

      <style
        jsx
        global
      >{`
        .react-datepicker {
          border: none;
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          font-family: inherit;
        }
        .react-datepicker__header {
          background: white;
          border: none;
          padding-top: 16px;
        }
        .react-datepicker__month {
          margin: 0;
          padding: 16px;
        }
        .react-datepicker__day-name {
          color: #56616b;
          font-weight: 500;
        }
        .react-datepicker__day {
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 50%;
          margin: 2px;
        }
        .react-datepicker__day--selected,
        .react-datepicker__day--keyboard-selected {
          background: #131316;
          color: white;
        }
        .react-datepicker__day:hover {
          border-radius: 50%;
        }
        .react-datepicker__navigation {
          top: 16px;
        }
        .react-datepicker__current-month {
          font-weight: 600;
          margin-bottom: 16px;
        }
      `}</style>
    </Box>
  );
};

export default DatePicker;
