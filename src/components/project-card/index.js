import React from 'react';
import '../project-card/index.css'; // Separate CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import saladImg from '../../assets/images/salad.png';
import salad1Img from '../../assets/images/salad1.png';
import salad2Img from '../../assets/images/salad2.png';
const ProjectCard = () => {
    const dishes = [
        {
            name: "Sobha Hearland II Villas",
            price: "$24.00",
            rating: 4.83,
            imageUrl: saladImg,
        },
        {
            name: "Sobha Hearland II Villas",
            price: "$26.00",
            rating: 4.83,
            imageUrl: salad1Img,
        },
        {
            name: "Sobha Hearland II Villas",
            price: "$23.00",
            rating: 4.83,
            imageUrl: salad2Img,
        },
    ];

    return (
      <>
        <div className="container">
             
            <div className="dishes">
                {dishes.map((dish, index) => (
                    <div className="dish" key={index}>
                        <img src={dish.imageUrl} alt={dish.name}   />
                        <h3>{dish.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           
                            <p className="rating">
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                            <FontAwesomeIcon icon={faStar}   />
                                {dish.rating} 
                            </p>
                        </div>
                        <div className="heart-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default ProjectCard;
