import Head from "next/head";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

import { projectsData } from "../lib/projects-data";
import { lang, tech } from "../lib/lang-data";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Alison Tahiri&apos; Portfolio - Home</title>
      </Head>
      <Hero />
      <Personal langData={lang} techData={tech} />
      <Projects projectsData={projectsData} />
      <Contact />
      <Footer />
    </div>
  );
}
