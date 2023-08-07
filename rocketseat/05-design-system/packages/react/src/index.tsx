import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: 'White',
  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '$2 $4',
      },
      big: {
        padding: '$3 $6',
        fontSize: 16,
      },
    },
  },
})

export type ButtonProps = ComponentProps<typeof Button>
