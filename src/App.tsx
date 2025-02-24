import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Timeline from './components/Timeline/Timeline';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Testimonials from './components/Testimonials/Testimonials';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects /> 
      <Timeline />
      <Testimonials /> 
      <Blog /> 
      <Contact />
    </Layout>
  );
}