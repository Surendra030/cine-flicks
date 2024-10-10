import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div
      className="category-card text-center p-3"
      style={{ backgroundColor: category.color, borderRadius: '8px' }} >
      <h3 style={{ color: 'white' }}>{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
