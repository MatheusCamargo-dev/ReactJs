import ReactPlayer from 'react-player'
import { useStoreSelector } from '../hooks'
import { useDispatch } from 'react-redux'
import { next } from '../../store/slices/player'

export function Video() {
  const dispatch = useDispatch()
  const video = useStoreSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player
    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLesson
  })

  function handlePlayNext() {
    dispatch(next())
  }
  return (
    <div className="aspect-video w-full bg-zinc-950">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${video.id}`}
        onEnded={handlePlayNext}
      />
    </div>
  )
}
