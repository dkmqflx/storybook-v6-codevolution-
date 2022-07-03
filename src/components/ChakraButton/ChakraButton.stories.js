import React from 'react';
import { Button } from '@chakra-ui/react';
import { action, actions } from '@storybook/addon-actions';

export default {
  title: 'Chakra/Button',
  component: Button,
};

export const Primary = () => (
  <Button onClick={action('Click Handler')} colorScheme="green">
    Primary
  </Button>
);
export const Secondary = () => (
  <Button {...actions('onClick', 'onMouseOver')} colorScheme="red">
    Secondary
  </Button>
);
/**
 * add on as the name implement extra features for story books
 * to make them more useful
 */
