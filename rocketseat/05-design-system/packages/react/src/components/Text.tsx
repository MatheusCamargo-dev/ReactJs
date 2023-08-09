import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'
import { fontSizes } from '@ignite-ui/tokens'
import { ElementType } from 'react'

const size = Object.entries(fontSizes).reduce<{
  [key: string]: { fontSize: string }
}>((acc, [key]) => {
  acc[key] = { fontSize: '$' + key }
  return acc
}, {})

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size,
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}
