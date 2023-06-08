import { ButtonContainer, ButtonVariant } from './index.styles'
export interface ButtonProps {
  variant?: ButtonVariant
}

export default function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
