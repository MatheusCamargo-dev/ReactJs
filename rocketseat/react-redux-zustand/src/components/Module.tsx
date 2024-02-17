import { ChevronDown } from 'lucide-react'
import { Lesson } from './Lesson'
import * as Collapsible from '@radix-ui/react-collapsible'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}
export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm text-zinc-400">{title}</strong>
          <span className="text-xs text-zinc-400">
            {amountOfLessons} lessons
          </span>
        </div>
        <ChevronDown className="ml-auto size-5 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          <Lesson title="Redux fundamentals" duration="09:13" />
          <Lesson title="Redux fundamentals" duration="09:13" />
          <Lesson title="Redux fundamentals" duration="09:13" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
