import { Cycle } from '../../contexts/CyclesContext'
import { ActionTypes } from './actions'
import { produce } from 'immer'

type Action = {
  type: ActionTypes
  payload: {
    data: any
  }
}
interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.data.newCycle],
      //   activeCycleId: action.payload.data.newCycle.id,
      // }
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.data.newCycle)
        draft.activeCycleId = action.payload.data.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === action.payload.data) {
      //       return { ...cycle, interruptedDate: new Date() }
      //     }
      //     return cycle
      //   }),
      //   activeCycleId: null,
      // }
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === action.payload.data) {
      //       return { ...cycle, finishedDate: new Date() }
      //     }
      //     return cycle
      //   }),
      // }
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) return state

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    }
  }
}
