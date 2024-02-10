import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { RootState } from '../../store'

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector
