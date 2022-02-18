import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is NSE" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis molestiae odio? Odio debitis neque aspernatur autem, fugiat esse itaque fugit at velit facilis sit dignissimos iusto odit quae atque!" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Lorem Ipsum" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis molestiae odio? Odio debitis neque aspernatur autem," />
      <Feature title="Lorem Ipsum" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis molestiae odio? Odio debitis neque aspernatur autem," />
      <Feature title="Lorem Ipsum" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis molestiae odio? Odio debitis neque aspernatur autem," />
    </div>
  </div>
);

export default WhatGPT3;
