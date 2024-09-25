import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import GoogleAdsense from "@/components/GoogleAdsense";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.photorecipe.one"),
  title: "PhotoRecipe - Recognize Dishes & Ingredients, Get Recipes Instantly",
  description:
    "PhotoRecipe is an AI-powered app that recognizes dishes and ingredients from photos. Upload a food photo to get instant recipe suggestions and ingredient-based cooking ideas.",
  keywords: [
    "Image to Recipe",
    "Recipe from Photo",
    "Dish Identification from Image",
    "Photo Recipe Search",
    "AI Recipe Generator",
    "Recipe Finder from Ingredients",
    "Ingredient Recognition Recipe",
    "Food Image Recognition",
    "Dish Identification AI",
    "Recipe Suggestions from Photo",
    "How to find a recipe from a picture",
    "Upload a photo to get a recipe",
    "Recipe from food image",
    "Find recipes with ingredients in photo",
    "AI recipe suggestions from food picture",
    "Recipe search using food photo",
    "Get recipes from ingredient image",
    "AI tool for identifying dishes from photos",
    "Food recognition app for recipes",
    "Identify dishes and recipes from pictures",
    "Identify dish from image AI",
    "AI food identification recipe",
    "Visual recipe search",
    "Picture to recipe converter",
    "Image-based recipe suggestions",
    "Ingredient-based recipe finder",
    "AI cooking assistant from photo",
    "Machine learning recipe generator",
    "Recipe from food photo app",
    "Visual cooking guide AI",
  ],
  openGraph: {
    title:
      "PhotoRecipe - Recognize Dishes & Ingredients from Photos, Get Recipes Instantly",
    description:
      "Take a photo of your dish or ingredients, and let PhotoRecipe find the perfect recipe for you. Get instant recipe recommendations and start cooking with ease.",
    url: "https://www.photorecipe.one",
    type: "website",
    images: [
      {
        url: "https://www.photorecipe.one/title-photo.png",
        width: 1200,
        height: 630,
        alt: "PhotoRecipe - Recognize Dishes & Ingredients, Get Recipes Instantly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PhotoRecipe - Recognize Dishes & Ingredients, Get Recipes Instantly",
    description:
      "Upload a food photo and discover recipes instantly. Recognize dishes or ingredients and get cooking ideas.",
    images: [
      {
        url: "https://www.photorecipe.one/title-photo.png",
        alt: "PhotoRecipe App Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <GoogleAnalytics gaId="G-6HP0PYXD9H" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAdsense pId="8551659713315852" />
    </html>
  );
}
