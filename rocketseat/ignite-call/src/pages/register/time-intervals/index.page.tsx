import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { Container, Header } from '../styles'

import {
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from './style'
import { ArrowRight } from 'phosphor-react'

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Almost there!</Heading>
        <Text>
          Set the time range you are available on each day of the week.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Monday</Text>
            </IntervalDay>

            <IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInputs>
          </IntervalItem>
        </IntervalContainer>
        <Button>
          Next Step
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
