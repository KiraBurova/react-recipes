import React, { useEffect, useState, FormEvent } from 'react';

import { SEARCH_PATH } from './config/constants'

import RecipesCardComponent from './components/Recipes'
import SearchForm from './components/SearchForm'

const App: React.FC = () => {
  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes(search: string) {
    const data = await fetch(`${SEARCH_PATH}key=${process.env.REACT_APP_API_KEY}&q=${search}&page=1 `);
    const response = await data.json();

    setRecipes(response.recipes);
  }

  return (
    <div className="App">
      <div className="container">
        <SearchForm fetchRecipes={fetchRecipes}></SearchForm>
        {recipes && <RecipesCardComponent recipes={recipes}></RecipesCardComponent>}
      </div>
    </div>
  );
}

export default App;
