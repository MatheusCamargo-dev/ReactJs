import { useRouter } from 'next/router'
import React from 'react'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta 1</h1>
        <span>78,79</span>
        <p>Lorem ipsum</p>
        <button>Send</button>
      </ProductDetails>
    </ProductContainer>
  )
}
