import React, { useState } from 'react';

const Card = ({ type, image, description, isSelected, onSelect }) => {
  const cardClassName = `flex items-center w-full md:w-1/2 flex-col text-sm md:text-md md:flex-row justify-center gap-4 p-4 bg-white shadow-md rounded-lg transition-transform w-2/5 ${
    isSelected ? 'scale-105 bg-indigo-100' : 'bg-white-300'
  }`;

  console.log(type ,isSelected, image);

  return (
    <div className={cardClassName} onClick={onSelect}>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-left">{`I am a ${type}`}</h1>
        <p className="text-left">{description}</p>
      </div>
      <img
        className="object-cover w-16 h-16 p-2 bg-white rounded-full"
        src={image}
        alt={type}
      />
      {isSelected && (
        <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-white bg-green-500 rounded-full">
          <i className="fas fa-check"></i> {/* Use Font Awesome class for check icon */}
        </div>
      )}
    </div>
  );
};

export default Card;
