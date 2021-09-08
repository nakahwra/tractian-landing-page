import { About } from '../components/About';
import { BorderShape } from '../components/BorderShape';
import { Hero } from '../components/Hero/index';

export default function Home() {
  return (
    <>
      <Hero />
      <BorderShape path="images/wave-top-blue.svg" />
      <About />
    </>
  )
}
