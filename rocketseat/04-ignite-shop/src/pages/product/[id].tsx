import React, { useState } from 'react'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'
import Head from 'next/head'

type Product = {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
  description: string
}
export default function Product({ product }: { product: Product }) {
  const { isFallback } = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  if (isFallback) {
    return <p></p>
  }

  async function handleBuyProduct() {
    try {
      setIsLoading(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsLoading(false)
      console.log(err)
      alert('Error redirecting to checkout')
    }
  }
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button onClick={handleBuyProduct} disabled={isLoading}>
            Send
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_OLMPOXWRsiZTRp' },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params.id)
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'USD',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
