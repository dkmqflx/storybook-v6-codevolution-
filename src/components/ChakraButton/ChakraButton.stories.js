import React from 'react';
import { Button } from '@chakra-ui/react';
import { action, actions } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

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
export const Log = () => (
  <Button colorScheme="blue" onClick={() => console.log('Button clicked')}>
    Log
  </Button>
);

export const Knobs = () => (
  <Button colorScheme="purple" disabled={boolean('Disabled', false)}>
    {text('Label', 'Button Label')}
  </Button>
);

/**
 * with this add on, you can test compliance of your stories
 * with web accessibility standards
 */
