import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

  const {register, handleSubmit} = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  });

  function handleCreateNewTransaction(data: NewTransactionFormInputs){
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input type="text" placeholder="Descrição" {...register('description')}/>
          <input type="number" placeholder="Preço" {...register('price', {valueAsNumber: true})}/>
          <input type="text" placeholder="Categoria" {...register('category')}/>

          <TransactionType>
            <TransactionTypeButton value="income" variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton value="outcome" variant="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}


// npm i json-server -D
// criar uma raiz no projeto chamada 'server.json'
// npx json-server server.json -> nome do arquivo  -w modo watch -d 500 tempo de delay