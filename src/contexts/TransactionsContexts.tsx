import { useEffect, useState, type ReactNode } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transaction {
  // Criação da interface que eu vou receber os valores
  id: number;
  description: string;
  category: string;
  price: number;
  type: "income" | "outcome";
  createdAt: string;
}

interface CreatedTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  // Criação da interface do contexto
  transactions: Transaction[]; // neste caso é interface de dados que vai passar para os outro componentes, sendo uma lista de transações.
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreatedTransactionInput) => Promise<void>;
}
interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType); // criação do contexto e a definição da tipagem do contexto

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]); //Estado é a melhor e unica forma para armazenar dados dentro do React

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        q: query, // query é o termo de busca que vai ser passado para a API
        _sort: "createdAt",
        _order: "desc",
      },
    });

    setTransactions(response.data);
  }

  async function createTransaction(data: CreatedTransactionInput) {
    const { category, description, price, type } = data;

    const response = await api.post("transactions", {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
