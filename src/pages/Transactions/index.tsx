import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../contexts/TransactionsContexts";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {

  const {transactions} = useContext(TransactionContext)

  // API de Fetch não é recomendada por que vai está sempre fazendo requisições, o certo seria usar o useEffect para executar uma vez quando o componente for montado;
  // useEffect(() => {
  //   fetch("http://localhost:3333/transactions")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTransactions(data);
  //       console.log(data) // TROCENTOS consoles
  //     });
  // });

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}

// npm i @radix-ui/react-radio-group
// trocar a div da modal que engloba os botões por um Radio.group
// trocar os botões por RadioGroup.Item
// &[data-state="checked"] { style do botão selecionado }
