import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { createContext, useState } from 'react'
import NewCycleForm from './components/NewCycleForm'
import Countdown from './components/Countdown'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}
export const CyclesContext = createContext({} as CyclesContextType)

const newCycleFormSchema = z.object({
  task: z.string().min(1, 'Report a task'),
  minutesAmount: z
    .number()
    .min(5, 'The cycle needs to be at least 5 minutes')
    .max(60, 'The cycle needs to be a maximum of 60 minutes'),
})

export type NewCycleFormData = z.infer<typeof newCycleFormSchema>

export default function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 5,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function markCurrentCycleAsFinished() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        }

        return cycle
      }),
    )
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = crypto.randomUUID()
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((cycles) => [...cycles, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset()
  }

  function handleStopCycle() {
    markCurrentCycleAsFinished()
    setActiveCycleId(null)
  }

  const task = watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            amountSecondsPassed,
            markCurrentCycleAsFinished,
            setSecondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>
        {!activeCycle ? (
          <StartCountdownButton type="submit" disabled={!task}>
            <Play size={24} />
            Start
          </StartCountdownButton>
        ) : (
          <StopCountdownButton type="button" onClick={handleStopCycle}>
            <HandPalm size={24} />
            Stop
          </StopCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
