import {
  createProjectAction,
  getProjectAction,
} from "@/actions/projects.action";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";

export default async function Home() {
  const projects = await getProjectAction();
  return (
    <main>
      <Hero />
      <ProductsSection projects={projects} />
    </main>
  );
}
