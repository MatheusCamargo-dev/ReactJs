import React from 'react'
import { Container, Header as HeaderContainer} from '../../styles/pages/app'
import logoImg from '../../assets/logo.svg'

export default function Header() {
  return (
    <Container>
        <HeaderContainer>
            <img src={logoImg.src} alt="" />
         </HeaderContainer>
    </Container>
   
  )
}
