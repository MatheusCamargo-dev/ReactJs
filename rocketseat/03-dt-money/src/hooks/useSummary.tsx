import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionContext'
export default function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else if (transaction.type === 'expense') {
        acc.expense += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      expense: 0,
      total: 0,
    },
  )

  return {
    summary,
  }
}
