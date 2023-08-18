import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput
        size={'sm'}
        prefix="ignite.com/"
        placeholder="your-user"
        crossOrigin
      />
      <Button size="sm" type="submit">
        Register
        <ArrowRight />
      </Button>
    </Form>
  )
}
