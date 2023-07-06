import React, { useState } from 'react';
import './Grid.css';
import Message from './Message';



const Grid = () => {
  const categories = [
    { name: 'Animal', description: 'Unlimited Jokes On Animal' },
    { name: 'Career', description: 'Unlimited Jokes On Career' },
    { name: 'Celebrity', description: 'Unlimited Jokes On Celebrity' },
    { name: 'Dev', description: 'Unlimited Jokes On Dev' },
    { name: 'Explicit', description: 'Unlimited Jokes On Explicit' },
    { name: 'Fashion', description: 'Unlimited Jokes On Fashion' },
    { name: 'Food', description: 'Unlimited Jokes On Food' },
    { name: 'History', description: 'Unlimited Jokes On History' },
    { name: 'Money', description: 'Unlimited Jokes On Money' },
    { name: 'Movie', description: 'Unlimited Jokes On Movie' },
    { name: 'Music', description: 'Unlimited Jokes On Music' },
    { name: 'Political', description: 'Unlimited Jokes On Political' },
    { name: 'Religion', description: 'Unlimited Jokes On Religion' },
    { name: 'Science', description: 'Unlimited Jokes On Science' },
    { name: 'Sport', description: 'Unlimited Jokes On Sport' },
    { name: 'Travel', description: 'Unlimited Jokes On Travel' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryMessage, setCategoryMessage] = useState('');
  
  const [Message, useState] = useState('');
  const [Visible, useVisible] = useState('');

  const handleCategoryClick = (categoryName) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=food`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedCategory(categoryName);
        setCategoryMessage(data.value);
      })
      .catch((error) => console.log(error));
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
    setCategoryMessage('');
  };

  return (
    <div>
      <Message/>
      <h1 className="heading">Chuck Norris</h1>
      <div className="grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`grid-item ${selectedCategory === category.name ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="category-name">{category.name}</div>
            <div className="category-description">{category.description}</div>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>{selectedCategory}</h2>
              <p className="category-message">{categoryMessage}</p>
              <button className="close-button" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grid;