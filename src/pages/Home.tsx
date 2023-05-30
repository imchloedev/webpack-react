import React from 'react';
// import '../styles/Home.css';
import Button from '@src/components/Button';
import JavaScript from '@src/assets/5968292.png'; // img from assets

const Home = () => {
  console.log('webpack test');
  return (
    <div>
      <h2>Home</h2>
      <Button>
        <div>
          HTML
          <img src="./images/1126012.png" />
        </div>
      </Button>
      <Button>
        <div>
          JavaScript
          <img src={JavaScript} />
        </div>
      </Button>
    </div>
  );
};

export default Home;
