"use client";
import Image from "next/image";
import Container from "../Container";
import ChefHat from "../icons/ChefHat";
import { useState } from "react";
import Upload from "../icons/Upload";

const Introduction = () => {
  const [image, setImage] = useState<string | null>(null);
  const [recipe, setRecipe] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setRecipe(
      "Delicious Pasta\n\nIngredients:\n- 200g pasta\n- 2 tbsp olive oil\n- 2 cloves garlic\n- 1 can diced tomatoes\n- Salt and pepper to taste\n- Fresh basil\n\nInstructions:\n1. Cook pasta according to package instructions.\n2. In a pan, heat olive oil and sauté garlic.\n3. Add diced tomatoes and simmer for 10 minutes.\n4. Season with salt and pepper.\n5. Toss cooked pasta with the sauce.\n6. Garnish with fresh basil and serve."
    );
    setLoading(false);
  };
  return (
    <section className="py-8">
      <Container>
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center">
            <h1 className="text-5xl font-bold leading-normal">
              Get Recipes from Food Photos{" "}
              <span className="relative whitespace-nowrap">
                <span className="absolute bg-neutral-content -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                <span className="relative text-mandy">Instantly</span>
              </span>
            </h1>
            <p className="mt-4 px-3 text-lg text-gray-600">
              Upload a photo of a dish or ingredients, and we&apos;ll provide
              you with a delicious recipe to try!
            </p>
          </div>
        </div>
        {/* Upload Section */}
        <div className="mt-10">
          <div className="max-w-xl mx-auto">
            <label
              htmlFor="file-upload"
              className="block text-sm font-medium text-gray-700"
            >
              Upload a photo
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                )}
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
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
      </Container>
    </section>
  );
};

export default Introduction;
