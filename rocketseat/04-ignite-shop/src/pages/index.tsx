import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider } from 'keen-slider/react'
import tshirt1 from '../assets/1.png';
import tshirt2 from '../assets/2.png';
import tshirt3 from '../assets/3.png';
import tshirt4 from '../assets/4.png';
import tshirt5 from '../assets/5.png';
import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";
type Product = {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
}
interface HomeProps {
  products: Product[]
}
export default function Home(props: HomeProps) {

  console.log('ssr')
  console.log(props)
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {
        props.products.map(product => {

          return(
            <Product className="keen-slider__slide" key={product.id}>
              <Image src={product.imageUrl} alt="" width={520} height={480} />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          )
        })
      }
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });
  console.log('test data')

  console.log(response.data)

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100

    }
  })
  return {
    props: {
      products
    }
  }
}