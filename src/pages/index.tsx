import { About } from '../components/About';
import { BorderShape } from '../components/BorderShape';
import { Hero } from '../components/Hero/index';
import { Product } from '../components/Product';

export default function Home() {
  return (
    <>
      <Hero />
      <BorderShape path="images/wave-top-blue.svg" background="#fff" />
      <About />
      <Product />
      <BorderShape path="images/wave-bottom-blue.svg" background="#f4f4f5" bottom={true} />
    </>
  )
}
