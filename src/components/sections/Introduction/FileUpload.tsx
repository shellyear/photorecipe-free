import React, { useRef, useState } from "react";
import Image from "next/image";
import ChefHat from "../../icons/ChefHat";
import Upload from "../../icons/Upload";
import IngredientsOptions, { useIngredientOptions } from "./IngredientsOptions";

export enum RecipeChoice {
  DISH = "dish",
  INGREDIENTS = "ingredients",
}

const FileUpload = () => {
  const ingredientOptionsProps = useIngredientOptions();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [recipeChoice, setRecipeChoice] = useState(RecipeChoice.DISH);
  const [loading, setLoading] = useState(false);

  const [recipeText, setRecipeText] = useState("");

  const [error, setError] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGetRecipe = async () => {
    setError("");
    setLoading(true);

    const res = await fetch("/api/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image,
        recipeChoice,
        skillLevel: ingredientOptionsProps.skillLevel,
        timeConstraint: ingredientOptionsProps.timeConstraint,
        dietaryRestrictions: ingredientOptionsProps.dietaryRestrictions,
      }),
    });
    const data = await res.json();
    console.log({ data });
    setRecipeText(
      "Delicious Pasta\n\nIngredients:\n- 200g pasta\n- 2 tbsp olive oil\n- 2 cloves garlic\n- 1 can diced tomatoes\n- Salt and pepper to taste\n- Fresh basil\n\nInstructions:\n1. Cook pasta according to package instructions.\n2. In a pan, heat olive oil and sauté garlic.\n3. Add diced tomatoes and simmer for 10 minutes.\n4. Season with salt and pepper.\n5. Toss cooked pasta with the sauce.\n6. Garnish with fresh basil and serve."
    );
    setLoading(false);
  };
  return (
    <div className="mt-10">
      <div className="max-w-xl mx-auto">
        <label
          htmlFor="file-upload"
          className="block text-sm font-medium text-gray-700"
        >
          Upload a photo
        </label>
        <div
          onClick={handleUploadClick}
          className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-mandy transition-colors"
        >
          <div className="space-y-1 text-center">
            {image ? (
              <Image
                src={image}
                alt="Uploaded food"
                width={200}
                height={200}
                className="mx-auto"
              />
            ) : (
              <Upload className="mx-auto h-12 w-12" />
            )}
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-mandy hover:text-mandydark">
                <span>Upload a file</span>
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPEG, GIF, WEBP up to 10MB
            </p>
          </div>
          <input
            ref={fileInputRef}
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </div>
      </div>

      {/* Dish and Ingredients radio group */}
      <div className="mt-2">
        <p className="text-md text-center font-medium text-gray-700 mb-2">
          Provide me recipe for:
        </p>
        <div className="mb-4 flex gap-6 items-center justify-center">
          <label className="flex items-center">
            <input
              type="radio"
              value={RecipeChoice.DISH}
              checked={recipeChoice === RecipeChoice.DISH}
              onChange={() => setRecipeChoice(RecipeChoice.DISH)}
              className="mr-2"
            />
            Dish
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value={RecipeChoice.INGREDIENTS}
              checked={recipeChoice === RecipeChoice.INGREDIENTS}
              onChange={() => setRecipeChoice(RecipeChoice.INGREDIENTS)}
              className="mr-2"
            />
            Ingredients
          </label>
        </div>
      </div>

      {recipeChoice === RecipeChoice.INGREDIENTS && (
        <IngredientsOptions {...ingredientOptionsProps} />
      )}

      <div className="mt-5 text-center">
        <button
          disabled={loading}
          onClick={handleGetRecipe}
          className="btn bg-mandy btn-wide text-white font-bold mt-4 hover:bg-mandydark"
        >
          <ChefHat w={22} h={22} />
          Get Recipe
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
