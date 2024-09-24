import Logo from "@/components/Logo";
import Container from "@/components/Container";
import HowItWorks from "@/components/sections/HowItWorks";
import Introduction from "@/components/sections/Introduction/Introduction";
import Link from "next/link";
import SingleReview from "@/components/sections/SingleReview";
import Pricing from "@/components/sections/Pricing";
import Support from "@/components/sections/Support";
import FAQ from "@/components/sections/FAQ";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";
import SignInButton from "@/components/buttons/SigninButton";

export default function Home() {
  return (
    <>
      <header className="mb-2 md:mb-6">
        <Container>
          <div className="flex justify-between gap-4">
            <Logo />
            <div className="hidden flex-1 items-center gap-12 px-16 md:inline-flex">
              <a href="#pricing">Pricing</a>
              <Link href="/signup">Signup</Link>
            </div>
            <SignInButton className="btn btn-sm bg-mandy hover:bg-mandydark text-white" text="Log in" />
          </div>
        </Container>
      </header>
      <main>
        <Introduction />
        <HowItWorks />
        <SingleReview
          className="bg-mandylight"
          feedback="This app instantly gives me recipe ideas just by uploading a photo of
          my ingredients. It’s perfect for busy weeknights when I need quick
          meal inspiration. Highly recommended!"
          imgPath="/salta.jpg"
          name="Salta Sutey"
          occupation="Home chef"
        />
        <Pricing />
        <SingleReview
          feedback="This app transformed my kitchen! Snapping photos and getting instant recipes has made cooking fun. The $19.99/year plan is a steal, and saving my favorite dishes makes meal planning effortless!"
          imgPath="/kurma.jpg"
          name="Ryo Tanaka"
          occupation="Food Enthusiast"
        />
        <Support />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
