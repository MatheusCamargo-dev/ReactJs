import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, Header } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to Ignite Call!</Heading>
        <Text>
          We need some information to create your profile! Oh, you can edit this
          information later.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label htmlFor="">
          <Text size="sm">Username</Text>
          <TextInput
            size={'sm'}
            prefix="ignite.com/"
            placeholder="your-user"
            crossOrigin
          />
        </label>
        <label htmlFor="">
          <Text size="sm">Fullname</Text>
          <TextInput placeholder="your name" crossOrigin />
        </label>

        <Button type="submit">
          {' '}
          Next Step <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
