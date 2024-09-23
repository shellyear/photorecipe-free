import { RecipeChoice } from "@/components/sections/Introduction/FileUpload";
import {
  SkillLevel,
  TimeConstraint,
} from "@/components/sections/Introduction/IngredientsOptions";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function getDishRecipePrompt() {
  return 'Here is an image of a dish. Analyze it and provide a recipe with the following structure as a response:\n{\n  "name": "Dish Name",\n  "ingredients": ["ingredient1", "ingredient2", "ingredient3"],\n  "instructions": ["step1", "step2", "step3"]\n}';
}

function getIngredientsRecipePrompt({
  skillLevel,
  timeConstraint,
  dietaryRestrictions,
}: Pick<RequestBody, "skillLevel" | "timeConstraint" | "dietaryRestrictions">) {
  return `Give me a recipe for the ingredients on the photo. Cooking time: ${timeConstraint}. Skill level: ${skillLevel}. ${
    dietaryRestrictions.length &&
    `Dietary restrictions: ${dietaryRestrictions
      .map((restriction) => restriction)
      .join(", ")}`
  }`;
}
interface RequestBody {
  image: Buffer;
  recipeChoice: RecipeChoice;
  skillLevel: SkillLevel; // Adjust this type based on your skill levels (e.g., string, enum, etc.)
  timeConstraint: TimeConstraint; // Assuming this is optional
  dietaryRestrictions: string[]; // Assuming this is optional
}

export async function POST(request: NextRequest) {
  const {
    image,
    recipeChoice,
    skillLevel,
    timeConstraint,
    dietaryRestrictions,
  } = await request.json();

  let promptText = "";

  if (recipeChoice === RecipeChoice.DISH) promptText = getDishRecipePrompt();
  else if (recipeChoice === RecipeChoice.INGREDIENTS)
    promptText = getIngredientsRecipePrompt({
      skillLevel,
      timeConstraint,
      dietaryRestrictions,
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
              },
            },
          ],
        },
      ],
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching from OpenAI:", error);
    return NextResponse.json(
      { error: "Failed to fetch recipe" },
      { status: 500 }
    );
  }
}
