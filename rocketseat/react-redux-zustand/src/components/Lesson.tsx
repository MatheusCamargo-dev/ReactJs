import { Video } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
  isCurrent: boolean
  onPlay: () => void
}
export function Lesson({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  return (
    <button
      onClick={onPlay}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
      data-active={isCurrent}
      disabled={isCurrent}
    >
      {isCurrent ? (
        <Video className="size-4 text-emerald-400" />
      ) : (
        <Video className="size-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
