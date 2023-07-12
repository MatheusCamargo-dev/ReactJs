import { TransactionsContext } from '../../contexts/TransactionContext'
import { useContext } from 'react'
import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
export default function Summary() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 17.400,000</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Expenses</span>
          <ArrowCircleUp size={32} color="#f75a68" />
        </header>
        <strong>R$ 17.400,000</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Income</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 17.400,000</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
