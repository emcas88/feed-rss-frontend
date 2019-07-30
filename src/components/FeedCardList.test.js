import React from 'react';
import ReactDOM from 'react-dom';
import FeedCardList from './FeedCardList';

describe('FeedCardList', () => {
  it('should render component', done => {
    const div = document.createElement('div');
  
    const feeds = [];
  
    ReactDOM.render(<FeedCardList feeds={feeds}/>, div);
    ReactDOM.unmountComponentAtNode(div);
    done();
  });
});