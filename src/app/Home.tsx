import Hero from './Hero/Hero'
import About from './About/About'
import Projects from './Projects/Projects'
import Experience from './Experience/Expereince'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      {/* <Blog /> */}
      <Contact />
    </>
  )
}

export default Home
