import "./App.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import WorkExperience from "@/components/work-experience";
import Footer from "@/components/footer";
import Divider from "@/components/divider";
import Projects from "@/components/projects";

export default function App() {
  return (
    <>
      <Header />
      {/* Offset content by the fixed header height (h-14) */}
      <main className="pt-14">
        <Hero />
        <Divider />
        <WorkExperience />
        <Divider />
        <Projects />
        <Divider />
      </main>
      {/* Keep footer visually below the fixed header during scroll */}
      <div className="sticky top-14">
        <Footer />
      </div>
    </>
  );
}
