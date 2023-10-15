import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import Image from 'next/image'

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './compenents/ClaimUsernameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Uncomplicated Scheduling | Ignite Call"
        description=" Connect your calendar and allow people to schedule appointments
            during your free time."
      />
      <Container>
        <Hero>
          <Heading size="4xl">Uncomplicated Scheduling</Heading>
          <Text size="xl">
            Connect your calendar and allow people to schedule appointments
            during your free time.
          </Text>
          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            width={400}
            quality={100}
            priority
            alt="Calendar symbolizing the application in operation."
          />
        </Preview>
      </Container>
    </>
  )
}
