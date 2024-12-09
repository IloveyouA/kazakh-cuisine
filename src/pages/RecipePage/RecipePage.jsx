import React from 'react';
import { food_list } from '../../assets/assets';

const RecipePage = () => {
  const recipe = {
    title: food_list[1].name,
    imageSrc: "kazakh-cuisine/src/assets/кумыс.jpg", 
    videoSrc: "", 
    dishName: food_list[1] .name,
    ingredients: [
      "1 kg of beef or lamb",
      "500g of pasta",
      "2 onions",
      "Salt and pepper to taste",
      "Fresh herbs (optional)"
    ],
    instructions: [
      "Boil the meat in salted water until tender.",
      "Prepare the pasta according to the package instructions.",
      "Slice the onions thinly and sauté in a pan until golden brown.",
      "Serve the meat on top of the pasta and top with the sautéed onions and herbs."
    ]
  };

  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.heading}>{recipe.title}</h1>

      {/* Image of Food */}
      <img src={recipe.imageSrc} alt={recipe.dishName} style={styles.image} />

      {/* Recipe */}
      <div style={styles.recipeText}>
        <h2>{recipe.dishName}</h2>
        <p>{recipe.dishName} is a traditional Kazakh dish made from boiled meat, usually beef or lamb, served with pasta and a rich onion sauce. The name "Beshbarmak" means "five fingers" in Kazakh, as the dish is traditionally eaten with hands.</p>

        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>

      {/* YouTube video tutorial */}
      <div style={styles.videoContainer}>
        <h3>Watch the Recipe Tutorial:</h3>
        <iframe
          src={recipe.videoSrc}
          style={styles.iframe}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px'
  },
  heading: {
    textAlign: 'center',
    color: '#2c3e50'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)'
  },
  recipeText: {
    marginTop: '20px',
    fontSize: '1.1em',
    lineHeight: '1.6',
    color: '#34495e'
  },
  videoContainer: {
    marginTop: '30px',
    textAlign: 'center'
  },
  iframe: {
    width: '100%',
    maxWidth: '800px',
    height: '450px',
    border: 'none',
    borderRadius: '8px'
  }
};

export default RecipePage;
