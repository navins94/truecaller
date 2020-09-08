import React from 'react';
import './Home.css';
import Card from '../../component/postCard/Card';

const Home = () => {
  return (
    <div className="col col-sm-8">
      <Card page={1} />
    </div>
  );
};

export default Home;
