import { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'
import dayjs from 'dayjs'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<dayjs.Dayjs | null>(
    null,
  )

  function handleClearSelectedDateTime() {
    setSelectedDateTime(null)
  }

  if (selectedDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    )
  }
  return <CalendarStep onSelectedDateTime={setSelectedDateTime} />
}
