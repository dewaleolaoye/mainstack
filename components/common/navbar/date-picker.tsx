'use client';
import { Box, Input } from '@chakra-ui/react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';
import Image from 'next/image';

interface DatePickerProps {
  selected: Date;
  onChange: (date: Date) => void;
}

const CustomInput = forwardRef<HTMLInputElement, { value?: string; onClick?: () => void }>(
  ({ value, onClick }, ref) => (
    <Box
      bg='#EFF1F6'
      borderRadius='12px'
      p='4px 16px'
      cursor='pointer'
      onClick={onClick}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      width='100%'
    >
      <Input
        ref={ref}
        value={value}
        readOnly
        border='none'
        p='0'
        width='auto'
        fontSize='14px'
        bg='transparent'
        _focus={{ outline: 'none' }}
        fontWeight='500'
      />

      <Image
        src='/svgs/arrow-down.svg'
        width={20}
        height={20}
        alt='arrow down'
      />
    </Box>
  )
);
CustomInput.displayName = 'CustomInput';

const DatePicker = ({ selected, onChange }: DatePickerProps) => {
  return (
    <Box>
      <ReactDatePicker
        selected={selected}
        onChange={(date: Date | null) => date && onChange(date)}
        dateFormat='dd MMM yyyy'
        showPopperArrow={false}
        customInput={<CustomInput />}
      />

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
          background: #fff;
          border: none;
          padding-top: 16px;
        }
        .react-datepicker__day-names {
          display: none;
        }

        .react-datepicker__month {
          margin: 0;
          padding: 8px;
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
          color: #fff;
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
