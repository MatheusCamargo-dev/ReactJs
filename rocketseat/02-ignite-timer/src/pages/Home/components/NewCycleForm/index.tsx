import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { useContext } from 'react'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

export default function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I will work on the</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Enter a name for your project"
        list="task-suggestion"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestion">
        <option value="Task 1" />
        <option value="Task 2" />
        <option value="Task 3" />
        <option value="strawberry" />
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        defaultValue={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
