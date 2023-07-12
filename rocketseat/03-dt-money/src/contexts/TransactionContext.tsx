import { createContext, ReactNode, useEffect, useState } from 'react'
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

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
      },
    })
    setTransactions(response.data)
  }

  async function createTransaction(data: NewTransactionFormInput) {
    const response = await api.post('transactions', {
      ...data,
      createdAt: new Date(),
    })
    setTransactions((state) => [...state, response.data])
    // setTransactions((transactions) => {...transactions, response.data})
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
