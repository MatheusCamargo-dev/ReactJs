import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import tshirt1 from '../assets/1.png';
import tshirt2 from '../assets/2.png';
import tshirt3 from '../assets/3.png';
import tshirt4 from '../assets/4.png';
import tshirt5 from '../assets/5.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshirt1} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={tshirt2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
