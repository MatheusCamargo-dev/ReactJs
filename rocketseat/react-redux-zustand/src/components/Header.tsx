import { useStoreSelector } from '../hooks'

export function Header() {
  const { currentModule, currentLesson } = useStoreSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player
    const currentModule = state.player.course.modules[currentModuleIndex]
    const currentLesson = currentModule.lessons[currentLessonIndex]

    return {
      currentModule,
      currentLesson,
    }
  })
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">
        Module "{currentModule.title}"
      </span>
    </div>
  )
}
