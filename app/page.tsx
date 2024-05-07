import { getFilteredProjectAction } from "@/actions/projects.action";
import BtnTop from "@/components/BtnTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";

export default async function Home() {
  const projectsPopular = await getFilteredProjectAction("populare");
  const projectsMostSales = await getFilteredProjectAction("mostSales");

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductsSection title="أشهر الكورسات" projects={projectsPopular} />
        <ProductsSection title="ألاكثر مبيعاً" projects={projectsMostSales} />
        <BtnTop />
      </main>
      <Footer />
    </>
  );
}
