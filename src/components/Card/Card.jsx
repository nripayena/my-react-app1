import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ title, page, content, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${page}`);
  };
  return (
    <StyledWrapper>
      <div className="card" onClick={handleClick} >
      <img src={image} alt={title} className="w-full h-fit object-cover rounded-md" />
        <div className="card__content font-custom-h">
          <p className="card__title">{title}</p>
          <p className="card__description">{content}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 100%; /* Make card take full width of container */
    max-width: 300px; /* Max width for large screens */
    height: 200px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background-color: #d4a373;
    margin: 10px; /* Added margin for spacing */
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: rgba(242, 242, 242, 0.9); /* Semi-transparent overlay */
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }
`;

export default Card;
