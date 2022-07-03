import { addDecorator } from '@storybook/react';
import Center from '../src/components/Center/Center';

addDecorator((story) => <Center>{story()}</Center>);
// global decorateor를 통해서, input 컴포넌트까지 적용시킬 수 있다

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
  // 알파벳 순서대로 sorting 한다.
  //https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// configuration file for story book you write
