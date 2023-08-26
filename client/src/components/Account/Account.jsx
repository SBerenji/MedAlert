import React from 'react';
import Card from '../Form/Card';
import dummyData from '../../dummyData.json'


const Account = ({ selectedCardIndex, handleCardSelect, handleContinueClick }) => {
  const handleCardToggle = (index) => {
    if (selectedCardIndex === index) {
      // Unselect the card if it's already selected
      handleCardSelect(null);
    } else {
      // Select the card if it's not selected
      handleCardSelect(index);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        {dummyData.map((card, index) => (
          <Card
            key={index}
            type={card.type}
            image={card.image}
            description={card.description}
            isSelected={index === selectedCardIndex}
            onSelect={() => handleCardToggle(index)} // Use handleCardToggle instead of handleCardSelect
          />
        ))}
      </div>
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded mt-4 ${
          selectedCardIndex === null ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }`}
        onClick={handleContinueClick}
        disabled={selectedCardIndex === null}
      >
        Continue
      </button>
    </div>
  );
};

export default Account;