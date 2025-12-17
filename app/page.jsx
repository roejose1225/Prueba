import Hero from "./componentes/Hero";
import Header from './componentes/Header'
import Feature from "./componentes/FeatureRow";
import CTA from "./componentes/CTA";
import Footer from "./componentes/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-6 space-y-24">
        <Hero />

        <Feature
          title="Measure linear walls"
          description="Measure the horizontal distance from one side of the space to the other. For a more accurate measurement, use a level (or a tape measure with a built-in leveling indicator) to ensure that you are measuring straight across the space. Measuring along the floor can help, but it is not as accurate as using a level tool."
          image="/images/lineal.jpg"
        />

        <Feature
          title="Measure vertical clearance"
          description="Measure the vertical distance from the bottom of the space to the top. Again, use a level (or a tape measure with a built-in leveling indicator) for accuracy."
          image="/images/vertical.jpg"
          reverse
        />
      </main>

      <CTA />
      <Footer />
    </>
  );
}