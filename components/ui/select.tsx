'use client';

import type { CollectionItem } from '@chakra-ui/react';
import { Select as ChakraSelect, Portal } from '@chakra-ui/react';
import * as React from 'react';

interface SelectTriggerProps extends ChakraSelect.ControlProps {
  clearable?: boolean;
}

export const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(function SelectTrigger(
  props,
  ref
) {
  const { children, ...rest } = props;
  return (
    <ChakraSelect.Control
      minH='48px'
      {...rest}
    >
      <ChakraSelect.Trigger
        ref={ref}
        bg='#fff'
        border='3px solid #131316'
        borderRadius='12px'
        minH='48px'
        transition='all 0.3s ease'
        _hover={{
          borderColor: '#131316',
          bg: '#fff',
          transition: 'all 0.3s ease 0.1s',
        }}
        _focus={{
          borderColor: '#131316',
          bg: '#fff',
          borderWidth: '3px',
        }}
        _focusVisible={{
          borderColor: '#131316',
          bg: '#fff',
          borderWidth: '3px',
        }}
        _active={{
          borderColor: '#131316',
          bg: '#fff',
          borderWidth: '3px',
        }}
      >
        {children}
      </ChakraSelect.Trigger>
    </ChakraSelect.Control>
  );
});

interface SelectContentProps extends ChakraSelect.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
}

export const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(function SelectContent(props, ref) {
  const { portalled = true, portalRef, ...rest } = props;
  return (
    <Portal
      disabled={!portalled}
      container={portalRef}
    >
      <ChakraSelect.Positioner>
        <ChakraSelect.Content
          {...rest}
          ref={ref}
          pos='relative'
          zIndex={9999}
          dropShadow='0px 6px 12px 0px #5C738314, 0px 4px 8px 0px #5C738314'
        />
      </ChakraSelect.Positioner>
    </Portal>
  );
});

export const SelectItem = React.forwardRef<HTMLDivElement, ChakraSelect.ItemProps>(function SelectItem(props, ref) {
  const { item, children, ...rest } = props;
  return (
    <ChakraSelect.Item
      key={item.value}
      item={item}
      _hover={{
        bg: 'none',
      }}
      {...rest}
      ref={ref}
      pos='relative'
      zIndex={99999}
    >
      {children}
    </ChakraSelect.Item>
  );
});

interface SelectValueTextProps extends Omit<ChakraSelect.ValueTextProps, 'children'> {
  children?(items: CollectionItem[]): React.ReactNode;
}

export const SelectValueText = React.forwardRef<HTMLSpanElement, SelectValueTextProps>(function SelectValueText(
  props,
  ref
) {
  const { children, ...rest } = props;
  return (
    <ChakraSelect.ValueText
      {...rest}
      ref={ref}
      px='16px'
    >
      <ChakraSelect.Context>
        {(select) => {
          const items = select.selectedItems;
          if (items.length === 0) return props.placeholder;
          if (children) return children(items);
          if (items.length === 1) return select.collection.stringifyItem(items[0]);
          return `${items.length} selected`;
        }}
      </ChakraSelect.Context>
    </ChakraSelect.ValueText>
  );
});

export const SelectRoot = React.forwardRef<HTMLDivElement, ChakraSelect.RootProps>(function SelectRoot(props, ref) {
  return (
    <ChakraSelect.Root
      {...props}
      ref={ref}
      positioning={{ sameWidth: true, ...props.positioning }}
    >
      {props.asChild ? (
        props.children
      ) : (
        <>
          <ChakraSelect.HiddenSelect />
          {props.children}
        </>
      )}
    </ChakraSelect.Root>
  );
}) as ChakraSelect.RootComponent;

interface SelectItemGroupProps extends ChakraSelect.ItemGroupProps {
  label: React.ReactNode;
}

export const SelectItemGroup = React.forwardRef<HTMLDivElement, SelectItemGroupProps>(function SelectItemGroup(
  props,
  ref
) {
  const { children, label, ...rest } = props;
  return (
    <ChakraSelect.ItemGroup
      {...rest}
      ref={ref}
    >
      <ChakraSelect.ItemGroupLabel>{label}</ChakraSelect.ItemGroupLabel>
      {children}
    </ChakraSelect.ItemGroup>
  );
});

export const SelectLabel = ChakraSelect.Label;
export const SelectItemText = ChakraSelect.ItemText;
