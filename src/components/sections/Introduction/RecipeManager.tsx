"use client";
import React, { useState } from "react";
import FileUpload from "./FileUpload";
import FeaturedRecipe from "./FeaturedRecipe";
import { RecipeData } from "@/types/recipe";

const RecipeManager = () => {
  const [image, setImage] = useState<string | null>(null);
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <FileUpload
        image={image}
        setImage={setImage}
        setRecipeData={setRecipeData}
        loading={loading}
        setLoading={setLoading}
      />
      {loading && (
        <div className="mt-10 flex justify-center">
          <span className="loading loading-ball loading-lg" />
        </div>
      )}
      {recipeData && image && (
        <FeaturedRecipe image={image} recipeData={recipeData} />
      )}
    </>
  );
};

export default RecipeManager;
