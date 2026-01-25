// src/components/RecommendationsList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations);

  React.useEffect(() => {
    // generate on mount so it has some values
    generateRecommendations();
  }, [generateRecommendations]);

  if (!recommendations || recommendations.length === 0)
    return (
      <div>
        <h3>Recommended</h3>
        <p>No recommendations yet.</p>
      </div>
    );

  return (
    <div>
      <h3>Recommended</h3>
      {recommendations.map((r) => (
        <div key={r.id} style={{ marginBottom: 12 }}>
          <h4>
            <Link to={`/recipes/${r.id}`}>{r.title}</Link>
          </h4>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
