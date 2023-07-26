import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 8,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold'
  },
  '&:hover': {
    filter: 'brightness(0.5)'
  }

})
export default function Home() {
  return (
    <Button><span>Test</span>Submit</Button>
  )
}
