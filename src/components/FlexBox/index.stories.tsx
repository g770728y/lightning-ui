import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { IBox } from '../../types/PageConfig.type';
import { FlexBox } from './index';

const box: IBox = {
  id: 1,
  direction: 'h',
  w: '100%',
  h: '100%',
  flexible: true,
  content: <div>content</div>
};

const hbox: IBox = {
  id: 1,
  direction: 'h',
  w: '100%',
  h: '100%',
  flexible: true,
  style: { background: '#ccc', border: '1px solid red' },

  children: [
    {
      id: 2,
      direction: 'h',
      w: '50%',
      h: '100%',
      flexible: true,
      style: { background: 'red', border: '2px solid blue' },
      content: <div>left</div>
    },
    {
      id: 3,
      direction: 'h',
      w: '50%',
      h: '100%',
      flexible: true,
      style: { background: 'blue', border: '2px solid red' },
      content: <div>right</div>
    }
  ]
};

const vbox: IBox = {
  id: 1,
  direction: 'v',
  w: '100%',
  h: '100%',
  flexible: true,
  style: { background: '#ccc', border: '1px solid red' },

  children: [
    {
      id: 2,
      direction: 'h',
      w: '100%',
      h: '200px',
      flexible: false,
      style: { background: 'red', border: '2px solid blue' },
      content: <div>top</div>
    },
    {
      id: 3,
      direction: 'h',
      w: '100%',
      h: '100%',
      flexible: true,
      style: { background: 'blue', border: '2px solid red' },
      content: <div>bottom</div>
    }
  ]
};

storiesOf('Box', module)
  .add('单个box', () => {
    return <FlexBox config={box} />;
  })
  .add('水平盒子', () => {
    return <FlexBox config={hbox} />;
  })
  .add('竖直盒子', () => {
    return <FlexBox config={vbox} />;
  });
