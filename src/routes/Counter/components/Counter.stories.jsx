import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Counter from './Counter'

storiesOf('Counter', module)
  .add('with empty value', () => (
    <Counter
      CounterStore={{ counter: 0 }}
      UiStore={{ appIsInSync: true }}
    />
  ))


// import React from 'react';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
// import Button from './Button';
// import Welcome from './Welcome';

// storiesOf('Welcome', module)
//   .add('to Storybook', () => (
//     <Welcome showApp={linkTo('Button')}/>
//   ));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));
