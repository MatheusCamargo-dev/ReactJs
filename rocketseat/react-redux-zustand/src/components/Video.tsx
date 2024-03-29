import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { next, useCurrentLesson } from '../../store/slices/player'

export function Video() {
  const dispatch = useDispatch()

  const { currentLesson: video } = useCurrentLesson()

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
