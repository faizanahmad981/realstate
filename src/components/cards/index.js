import React from 'react';
import '../cards/index.css'; // Make sure to import the updated CSS file
import { faChevronLeft, faChevronRight, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import building from '../../assets/images/building.svg';
import building1 from '../../assets/images/villas.webp';
import building2 from '../../assets/images/villas1.webp';

const Cards = () => {
  const cardData = [
    {
      image: building,
      title: 'Sobha Heartland II Villas',
      description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.',
      rating: 4.83,
    },
    {
      image: building1,
      title: 'Sobha Heartland II Villas',
      description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.',
      rating: 4.83,
    },
    {
      image: building2,
      title: 'Sobha Heartland II Villas',
      description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.',
      rating: 4.83,
    },
  ];

  return (
    <div className='main-container'>

     <div className="project">  
          <div className="project-left">
            <p>Best Project of the Years</p>
            <h2>Our recent projects</h2>
          </div>
          <div className="navigation">
              <button className="nav-button1">
              <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="nav-button">
              <FontAwesomeIcon icon={faChevronRight} />
              </button>
          </div>
          </div>
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
          <div className="card-rating">
            <span className="stars">⭐⭐⭐⭐⭐</span> 
            <span className="rating-score">{card.rating}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default Cards;