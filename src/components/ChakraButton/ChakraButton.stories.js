import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Chakra/Button',
  component: Button,
};

export const Primary = () => <Button colorScheme="red">Red</Button>;

export const Secondary = () => <Button colorScheme="green">Secondary</Button>;
