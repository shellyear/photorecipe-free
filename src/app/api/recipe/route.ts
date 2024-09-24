import {
  SkillLevel,
  TimeConstraint,
} from "@/components/sections/Introduction/IngredientsOptions";
import { RecipeChoice } from "@/types/enum";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function getDishRecipePrompt() {
  return "Here is an image of a dish. Analyze it and provide a recipe.";
}

function getIngredientsRecipePrompt({
  skillLevel,
  timeConstraint,
  dietaryRestrictions,
  missingIngredients,
}: Pick<
  RequestBody,
  "skillLevel" | "timeConstraint" | "dietaryRestrictions" | "missingIngredients"
>) {
  return `Give me a recipe for the ingredients on the photo. Missing ingredients on the photo: ${missingIngredients} Cooking time: ${timeConstraint}. Skill level: ${skillLevel}. ${
    dietaryRestrictions?.length
      ? `Dietary restrictions: ${dietaryRestrictions
          .map((restriction) => restriction)
          .join(", ")}`
      : ""
  }.`;
}

function getPrompt(
  recipeChoice: RecipeChoice.DISH | RecipeChoice.INGREDIENTS,
  recipeOptions: Pick<
    RequestBody,
    | "skillLevel"
    | "timeConstraint"
    | "dietaryRestrictions"
    | "missingIngredients"
  >
) {
  console.log({
    recipeChoice,
    dish: RecipeChoice.DISH,
    ingredients: RecipeChoice.INGREDIENTS,
    isDish: recipeChoice === RecipeChoice.DISH,
    isIngredients: recipeChoice === RecipeChoice.INGREDIENTS,
  });
  if (recipeChoice === RecipeChoice.DISH) {
    return getDishRecipePrompt();
  }

  if (recipeChoice === RecipeChoice.INGREDIENTS) {
    return getIngredientsRecipePrompt({
      ...recipeOptions,
    });
  }

  return "";
}
interface RequestBody {
  image: Buffer;
  recipeChoice: RecipeChoice;
  skillLevel?: SkillLevel;
  timeConstraint?: TimeConstraint;
  dietaryRestrictions?: string[];
  missingIngredients?: string;
}

const RecipeFormat = z.object({
  name: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
});

export async function POST(request: NextRequest) {
  const {
    image,
    recipeChoice,
    skillLevel,
    timeConstraint,
    dietaryRestrictions,
    missingIngredients,
  }: RequestBody = await request.json();

  let promptText = getPrompt(recipeChoice, {
    skillLevel,
    timeConstraint,
    dietaryRestrictions,
    missingIngredients,
  });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: promptText },
            {
              type: "image_url",
              image_url: {
                url: image,
                detail: "low",
              },
            },
          ],
        },
      ],
      response_format: zodResponseFormat(RecipeFormat, "recipe"),
    });
    console.log("Token usage", response.usage);
    return NextResponse.json(response.choices[0].message.content);
  } catch (error) {
    console.error("Error fetching from OpenAI:", error);
    return NextResponse.json(
      { error: "Failed to fetch recipe" },
      { status: 500 }
    );
  }
}
