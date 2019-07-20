import React from 'react';
import './App.css';
import FeedAddMain from './components/FeedAddMain';
import FeedCardElement from './components/FeedCardElement';
import FeedCardList from './components/FeedCardList';

function App() {
  return (
    <div className="container">
      <FeedAddMain />
      <FeedCardList />
    </div>
  );
}

export default App;
