import { Label, SimulationForm, Subtitle } from "../styles/styles";

interface Props {
  age?: number;
  interestRate: number;
  monthlyPayment: number;
  paymentDeadline: string;
  loanValue: string;
}

function SimulationResult({
  age,
  interestRate,
  monthlyPayment,
  paymentDeadline,
  loanValue,
}: Props) {

  return (
    <SimulationForm>
      <Subtitle>Preencha os dados para visualizar o resultado da simulação</Subtitle>
      <div>
        <Label htmlFor="age">Sua Idade:</Label>
        <p data-testid="age">{age ?? null} anos</p>
      </div>

      <div>
        <Label htmlFor="rate">Taxa de Juros:</Label>
        <p data-testid="interest-rate-value">{(interestRate * 100)}%</p>
      </div>

      <div>
        <Label htmlFor="installment">Parcela Mensal:</Label>
        <p data-testid="installment-value">R$ {monthlyPayment?.toFixed(2)}</p>
      </div>

      <div>
        <Label htmlFor="total-amount">Total a Pagar:</Label>
        <p data-testid="total-amount-value">R$ {(monthlyPayment * Number(paymentDeadline)).toFixed(2)}</p>
      </div>

      <div>
        <Label htmlFor="total-interest">Total de Juros:</Label>
        <p data-testid="total-interest-value">R$ {(monthlyPayment * Number(paymentDeadline) - Number(loanValue)).toFixed(2)}</p>
      </div>
    </SimulationForm>
  )
}

export default SimulationResult;
