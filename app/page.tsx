import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  summary,
  "slug": slug.current,
  image,
  publishedAt,
  readTime
}`;

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blogs posts={posts} />
      <Contact />
    </main>
  );
}
