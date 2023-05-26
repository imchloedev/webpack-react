import React from 'react';
// import '../css/Home.css';
import Button from '../components/Button';

const Home = () => {
  console.log('webpack test');
  return (
    <div>
      <h2>Home</h2>
      <Button>
        <div>
          HTML
          <img src="./public/images/1126012.png" />
        </div>
      </Button>
    </div>
  );
};

export default Home;
