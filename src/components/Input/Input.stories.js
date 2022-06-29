import React from 'react';
import Input from './Input';

export default {
  title: 'Form/Input', // heirarych를 설정할 수 있다.
  component: Input,
};

export const Small = () => <Input size="small" placeholder="Small size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;

Small.storyName = 'Small Input'; // assign new name
