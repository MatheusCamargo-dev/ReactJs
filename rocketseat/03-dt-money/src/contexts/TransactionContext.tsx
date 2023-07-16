import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'
import { NewTransactionFormInput } from '../components/NewTransactionModal'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'expense'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: NewTransactionFormInput) => void
}

export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionsProviderProps {
  children: ReactNode
}
export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
      },
    })
    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
    async (data: NewTransactionFormInput) => {
      const response = await api.post('transactions', {
        ...data,
        createdAt: new Date(),
      })
      setTransactions((state) => [...state, response.data])
      // setTransactions((transactions) => {...transactions, response.data})
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
