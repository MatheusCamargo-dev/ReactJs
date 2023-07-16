import { useMemo } from 'react'
import { TransactionsContext } from '../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'
export default function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(
    () =>
      transactions.reduce(
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
      ),
    [transactions],
  )

  return {
    summary,
  }
}
