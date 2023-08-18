import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import Image from 'next/image'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Uncomplicated Scheduling</Heading>
        <Text size="xl">
          Connect your calendar and allow people to schedule appointments during
          your free time.
        </Text>
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
  )
}
