import { Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Spinner
      size='sm'
      color='#131316'
      css={{ '--spinner-track-color': '#efefef' }}
    />
  );
};

export default Loader;
