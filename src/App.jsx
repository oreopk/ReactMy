import React, { Fragment } from 'react';
import Card from './components/card/card';
import Container from './components/container/container';
import eclipse7 from '../src/svg/Ellipse 7.svg';

const App = () => {
  const cards = [
    { itemname: 'coffee', status: 'in progress', icon: eclipse7 },
    { itemname: 'coffee2', status: 'ok', icon: eclipse7 },
  ];

  return (
    <div className="main">
      <Container title="To Do" color="blue" cards={cards} />
      <Container title="In Progress" color="orange" cards={cards} />
      <Container title="Review" color="purple" cards={cards} />
      <Container title="Done" color="green" cards={cards} />
    </div>
  );
};
export default App;
