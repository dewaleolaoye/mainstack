import { Box } from '@chakra-ui/react';
import React from 'react';

const Sidebar = () => {
  return (
    <Box
      position='sticky'
      top='35%'
      width='48px'
      height='192px'
    >
      <Box
        width='48px'
        height='192px'
        borderRadius='100px'
        padding='4px'
        bg='gray.100'
      >
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
