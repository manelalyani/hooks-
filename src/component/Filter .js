import React from 'react';
const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <label>
        Title:
        <input type="text" value={titleFilter} onChange={onTitleChange} />
      </label>
      <label>
        Rating:
        <select value={ratingFilter} onChange={onRatingChange}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2 </option>
          <option value="3">3 </option>
        </select>
      </label>
    </div>
  );
};

export default Filter;