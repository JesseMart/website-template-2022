import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis molestiae odio? Odio debitis neque aspernatur autem.',
  },
  {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis molestiae odio? Odio debitis neque aspernatur autem.',
  },
  {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis molestiae odio? Odio debitis neque aspernatur autem.',
  },
  {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis molestiae odio? Odio debitis neque aspernatur autem..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis molestiae odio?</h1>
      <p>Lorem ipsum dolor sit amet </p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
