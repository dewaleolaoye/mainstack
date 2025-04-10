import { Box, Center } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from '../ui/tooltip';
import { sidebarLinks } from '@/constants';

const Sidebar = () => {
  return (
    <Box
      position='sticky'
      top='24%'
      width='48px'
      height='192px'
    >
      <Box
        pos='sticky'
        top='24%'
      >
        <Box
          width='48px'
          height='192px'
          borderRadius='100px'
          padding='4px'
          bg='#fff'
          boxShadow='0px 6px 12px 0px #5C738314, 0px 4px 8px 0px #5C738314'
          py='16px'
        >
          <Center
            flexDir='column'
            gap='12px'
          >
            {sidebarLinks.slice(0, 4).map(({ src, name, href }) => {
              return (
                <Tooltip
                  key={name}
                  content={name}
                  openDelay={500}
                  closeDelay={100}
                  positioning={{
                    placement: 'right-end',
                    offset: {
                      mainAxis: 15,
                      crossAxis: 4,
                    },
                  }}
                  contentProps={{
                    css: {
                      '--tooltip-bg': '#131316',
                      fontSize: '16px',
                      padding: '12px',
                      borderRadius: '8px',
                    },
                  }}
                  showArrow
                >
                  <Link href={href}>
                    <Center
                      key={name}
                      borderRadius='100%'
                      width='32px'
                      height='32px'
                      transition='all 0.5s ease-out'
                      p='4px'
                      _hover={{
                        bg: '#EFF1F6',
                        p: '6px',
                      }}
                    >
                      <Image
                        src={src}
                        alt={name}
                        width={24}
                        height={24}
                      />
                    </Center>
                  </Link>
                </Tooltip>
              );
            })}
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
