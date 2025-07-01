import { createContext, useEffect, useState, type ReactNode } from "react";

interface Transaction {
  // Criação da interface que eu vou receber os valores
  id: number;
  description: string;
  category: string;
  price: number;
  type: "income" | "outcome";
  createdAt: string;
}

interface TransactionContextType {
  // Criação da interface do contexto
  transactions: Transaction[]; // neste caso é interface de dados que vai passar para os outro componentes, sendo uma lista de transações.
}

export const TransactionContext = createContext({} as TransactionContextType); // criação do contexto e a definição da tipagem do contexto

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]); //Estado é a melhor e unica forma para armazenar dados dentro do React

  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
