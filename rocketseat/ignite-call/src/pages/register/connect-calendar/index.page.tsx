import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'

import { useRouter } from 'next/router'
import { ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'

export default function Register() {
  const router = useRouter()
  const session = useSession()

  async function handleRegister(data: RegisterFormData) {}
  return (
    <Container>
      <Header>
        <Heading as="strong">Connect to your calendar!</Heading>
        <Text>
          Connect your calendar to automatically check busy times and new events
          as they are scheduled.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
            // disabled={!!session}
          >
            {session ? 'Connected' : 'Connect '}
            {!session && <ArrowRight />}
          </Button>
        </ConnectItem>
        <Button type="submit">
          {' '}
          Next Step <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
