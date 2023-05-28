import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export default function Time({ publishedAt }) {

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
      })
    
      const relativeDate = formatDistanceToNow(publishedAt, {
        addSuffix: true,
        locale: ptBR,
      })
  return (
    <time dateTime={publishedAt.toISOString()} title={publishedDateFormatted}> Publicado {relativeDate}</time>
  )
}
