import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight, Check } from 'phosphor-react'

import { useRouter } from 'next/router'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'

export default function ConnectCalendar() {
  const router = useRouter()
  const session = useSession()

  const hasAuthError = !!router.query.error
  console.log(session)
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }
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
          {isSignedIn ? (
            <Button size="sm" disabled>
              Connected
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Connect
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>
        {hasAuthError && (
          <AuthError size="sm">
            Failed to connect to Google, please check if you have enabled the
            permissions for accessing Google Calendar.
          </AuthError>
        )}

        <Button type="submit" disabled={!isSignedIn}>
          {' '}
          Next Step <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
