import React from 'react'
import { Container, Header as HeaderContainer} from '../../styles/pages/app'
import logoImg from '../../assets/logo.svg'
import Image from 'next/image'

export default function Header() {
  return (
      <HeaderContainer>
          <Image src={logoImg} alt="" />
      </HeaderContainer>
  )
}
