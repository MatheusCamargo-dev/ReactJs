import React from 'react'
import { Header as HeaderContainer } from '../../styles/pages/app'
import logoImg from '../../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
    </HeaderContainer>
  )
}
