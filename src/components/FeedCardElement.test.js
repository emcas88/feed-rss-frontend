import React from 'react';
import ReactDOM from 'react-dom';
import FeedCardElement from './FeedCardElement';

it('FeedCardElement render', () => {
  const div = document.createElement('div');

  const feed = {
      items: [],
      title: 'AAAAA',
      image: {
          url: 'BBBBB'
      }
  }

  ReactDOM.render(<FeedCardElement feed={feed}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});