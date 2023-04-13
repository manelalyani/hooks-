import React from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter ';
import { movies } from "./data";


function App() {
  return (
    <div>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleChange={onTitleChange}
        onRatingChange={handleRatingChange}/>
      
      <MovieList movies={filteredMovies} />
      <button onClick={() => handleAddMovie({ id: movies.length + 1, title: 'New Movie', description: '', posterURL: '', rating: 0 })}>
        Add Movie
      </button>
    </div>
  );
}

export default App;
