import { ReactNode } from 'react'

export const Container = ({children}: {children: ReactNode}) => {
  return <div className="d-flex justify-content-center align-items-center">{children}</div>
}