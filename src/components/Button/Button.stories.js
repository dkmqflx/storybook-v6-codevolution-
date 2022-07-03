import React from 'react';
import Button from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button', // 설정해줌으로써 아래 부분 주석처리할 수 있다
  },
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: 'primary',
  // children: 'Primary Args',
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: 'secondary',
  // children: 'Secondary Args',
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: 'Long Primary Args',
};

/**
 * args를 사용하는 이유
 * 더 간편하게 표현할 수 있다
 * 더 잘 표현할 수 있다
 */
