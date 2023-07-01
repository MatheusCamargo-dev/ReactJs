import { Cycle } from '../../contexts/CyclesContext'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      data: { newCycle },
    },
  }
}

export function interruptedDateAction(activeCycleId: string | null) {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    payload: { data: activeCycleId },
  }
}

export function markCurrentCycleAsFinishedAction(activeCycleId: string | null) {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    payload: {
      data: activeCycleId,
    },
  }
}
