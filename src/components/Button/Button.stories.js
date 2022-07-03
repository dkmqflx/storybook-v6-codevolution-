import React from 'react';
import Center from '../Center/Center';
import Button from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  // args: {
  //   children: 'Button', // 설정해줌으로써 아래 부분 주석처리할 수 있다
  // },
  decorators: [(story) => <Center>{story()}</Center>],
};

/*
decorators are components that are wrap story
-> Center 컴포넌트
*/

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

// export const Primary = () => (
//   <Center>
//     <Button variant="primary">Primary</Button>
//   </Center>
// );
// export const Secondary = () => (
//   <Center>
//     <Button variant="secondary">Secondary</Button>
//   </Center>
// );
// export const Success = () => (
//   <Center>
//     <Button variant="success">Success</Button>
//   </Center>
// );
// export const Danger = () => (
//   <Center>
//     <Button variant="danger">Danger</Button>
//   </Center>
// );

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
