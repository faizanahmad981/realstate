import React from 'react';
import '../project-card/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import building from '../../assets/images/building.svg';
import building1 from '../../assets/images/villas.webp';
import building2 from '../../assets/images/villas1.webp';

const ProjectCard = () => {
    const carddetails = [
        {
            name: "Sobha Heartland II Villas",
            price: "$24.00",
            rating: 4.83,
            imageUrl: building,
        },
        {
            name: "Sobha Heartland II Villas",
            price: "$26.00",
            rating: 4.83,
            imageUrl: building1,
        },
        {
            name: "Sobha Heartland II Villas",
            price: "$23.00",
            rating: 4.83,
            imageUrl: building2,
        },
    ];

    return (
        <div className="container mt-5" >
            <div className="row">
                {carddetails.map((card, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card">
                            <img
                                alt={`Image of ${card.name}`}
                                className="card-img-top"
                                src={card.imageUrl}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{card.name}</h5>
                                <p className="card-text">{card.price}</p>
                                <div className="rating">
                                    {/* Display stars based on rating */}
                                    {[...Array(Math.floor(card.rating))].map((_, starIndex) => (
                                        <FontAwesomeIcon key={starIndex} icon={faStar} />
                                    ))}
                                    <span>{card.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;
