import React, { useEffect } from "react";
import CloudRecipe from "./recipe.jsx";
import {getRecipeFromMistral} from "../ai.js"

export default function Main() {

    const [ingredients, setCount] = React.useState(["Ground beef", "Tomato sauce", "Onion", "Garlic", "Oregano", "Salt", "Pepper", "Pasta"]); 
    const [recipe, setRecipe] = React.useState("");
    const [loading, setLoading] = React.useState(false)
    const recipeSection = React.useRef(null)

    useEffect(() => {
        if (recipe && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"});
        }
    }, [recipe])



    function removeIngredient(index) {
        setCount(prev => prev.filter((_, i) => i !== index))
    }

    const ingredientListItems = ingredients.map((ingredient, index) => {
        return <li key={index}> {ingredient} <span onClick={() => removeIngredient(index)}>📌</span></li>
    })

    function formData(formData) {
        const ingredient = formData.get("ingredient")   
        if (ingredient) {
            setCount(prev => [...prev, ingredient])
        }
    }

    
    async function getRecipe() {
        setLoading(true)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        setLoading(false)
    }


    return (
        <main>
            <form action={formData}>
          <div className="form-field">
            <input type="text" name="ingredient" id="search" placeholder="Search for recipes..." />
          <button type="submit">+ Add Ingredients</button>
          </div>
        </form>
            <div className="ingredient-box">
               <h2>Ingredients on hand:</h2>
        <ul>
            {ingredientListItems}
        </ul> 
             </div>
             {/* section */}
            {ingredients.length > 2 && <section className="get-recipe-box ">
            <div className="left">
                <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={()=> setCount([])}>Clear list</button>
            <div className="right">
                <button onClick={getRecipe}>Get a recipe</button>
            </div>
        </section>}
        {/*section*/}
        {loading && <div className="spinner"></div>}
            {recipe && <CloudRecipe recipe={recipe} ref={recipeSection}/>}
        </main>
    )
}