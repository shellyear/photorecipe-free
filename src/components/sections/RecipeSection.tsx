"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import ArrowUp from "../icons/ArrowUp";
import ArrowDown from "../icons/ArrowDown";
import Container from "../Container";

const RecipeSection = () => {
  const [isRecipeExpanded, setIsRecipeExpanded] = useState(false);
  const toggleRecipeExpansion = () => {
    setIsRecipeExpanded(!isRecipeExpanded);
  };

  return (
    <div className="mt-10 jumping-button jumping-button:hover">
      <Container>
        <button
          onClick={toggleRecipeExpansion}
          className="w-full flex justify-between items-center px-4 py-2 text-left text-lg font-medium text-white bg-mandy hover:bg-mandydark focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50 rounded"
        >
          <span>Featured Recipe: Creamy Mushroom Risotto</span>
          {isRecipeExpanded ? (
            <ArrowUp className="h-5 w-5" fill="white" />
          ) : (
            <ArrowDown className="h-5 w-5" fill="white" />
          )}
        </button>
        {isRecipeExpanded && (
          <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Image
                    src="/food-on-table.jpg"
                    alt="Creamy Mushroom Risotto"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Ingredients:</h4>
                  <ul className="list-disc list-inside mb-4">
                    <li>1 1/2 cups Arborio rice</li>
                    <li>4 cups vegetable or chicken broth</li>
                    <li>1/2 cup white wine</li>
                    <li>1 onion, finely chopped</li>
                    <li>2 cloves garlic, minced</li>
                    <li>8 oz mushrooms, sliced</li>
                    <li>2 tbsp olive oil</li>
                    <li>1/2 cup grated Parmesan cheese</li>
                    <li>2 tbsp butter</li>
                    <li>Salt and pepper to taste</li>
                    <li>Fresh parsley for garnish</li>
                  </ul>
                  <h4 className="text-lg font-semibold mb-2">Instructions:</h4>
                  <ol className="list-decimal list-inside">
                    <li>
                      In a large pan, heat olive oil and sauté onions until
                      translucent.
                    </li>
                    <li>
                      Add garlic and mushrooms, cook until mushrooms are golden.
                    </li>
                    <li>
                      Add Arborio rice and stir for 1-2 minutes until slightly
                      toasted.
                    </li>
                    <li>Pour in white wine and stir until absorbed.</li>
                    <li>
                      Gradually add warm broth, 1/2 cup at a time, stirring
                      constantly until absorbed.
                    </li>
                    <li>
                      Continue adding broth and stirring until rice is creamy
                      and al dente (about 18-20 minutes).
                    </li>
                    <li>Stir in Parmesan cheese and butter until melted.</li>
                    <li>Season with salt and pepper to taste.</li>
                    <li>Garnish with fresh parsley and serve immediately.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default RecipeSection;
