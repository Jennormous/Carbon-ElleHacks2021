import React, { useState, useEffect } from "react";
import axios from "axios";
// const api_key = `f612e7df1b6742e391660a3730e85790`;
const api_key = `404eb51b4be4444caeebf632dbfaabdc`;
// const api_key = "c45392dade5d4a40ac87d272d57cd9c9";
// const api_key = " 16611234ce304cf083e1564bae24a7b8"
// const api_key = `29ad192a399342ca83736a8f77efc04d`;
// const api_key =`b0988a538e99412e8c8206967e735f45`;

function MakeCard({ title, img, link, ready, serving }) {
  return (
    <div className='col s12 m6 l4'>
      <div className='card'>
        <div className='card-image'>
          <img src={img} />
          <span className='card-title'>{title}</span>
        </div>
        <div className='card-content'>
          <p>Serving: {serving}</p>
          <p>Ready: {ready}</p>
        </div>
        <div className='card-action'>
          <a href={link}>Start Cooking!</a>
        </div>
      </div>
    </div>
  );
}

function GetRecipes({ expiring }) {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const firstResponse = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api_key}&number=3&ingredients=${expiring}`
      );
      console.log(firstResponse);
      firstResponse.data.forEach((recipe) => {
  
        axios
          .get(
            `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${api_key}&includeNutrition=false`
          )
          .then((response) =>
            setRecipe((prevRecipes) => {
              return [...prevRecipes, response.data];
            })
          );
      });
    };
    getRecipes();
  }, []);

  // console.log(recipes);

  return (
    <div className='container'>
      <div className='row'>
        {recipes.map((recipe, index) => (
          <MakeCard
            title={recipe.title}
            img={recipe.image}
            link={recipe.sourceUrl}
            serving={recipe.servings}
            ready={recipe.readyInMinutes}
          />
        ))}
      </div>
    </div>
  );
}

//
export default function Recipes() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getIngr();
  }, []);

  const getIngr = async () => {
    axios.get(`http://localhost:5000/grocery/`).then((res) => {
      const sorted = res.data.sort((a, b) => {
        return a.dateExpire - b.dateExpire;
      });
      setRecipe(sorted);
      console.log("unsorted", res.data, "sorted", sorted);
    });
  };

  return (
    <div className="container">
      <h3>Recipes</h3>
      <section>
        {recipe.slice(0, 2).map((expiring, index) => (
          <GetRecipes expiring={expiring.item} key={index} />
        ))}
      </section>
    </div>
  );
}
