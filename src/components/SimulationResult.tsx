interface Props {
  age?: number;
  interestRate: number;
  monthlyPayment: number;
  paymentDeadline: number;
  loanValue: number;
}

function SimulationResult({
  age,
  interestRate,
  monthlyPayment,
  paymentDeadline,
  loanValue,
}: Props) {

  return (
    <>
      <div>
        <label htmlFor="age">Sua Idade:</label>
        <p>{age ?? null} anos</p>
      </div>

      <div>
        <label htmlFor="rate">Taxa de Juros:</label>
        <p>{(interestRate * 100)}%</p>
      </div>

      <div>
        <label htmlFor="installment">Parcela Mensal:</label>
        <p>R$ {monthlyPayment?.toFixed(2)}</p>
      </div>

      <div>
        <label htmlFor="total-amount">Total a Pagar:</label>
        <p>R$ {(monthlyPayment * (paymentDeadline ?? 0)).toFixed(2)}</p>
      </div>

      <div>
        <label htmlFor="total-interest">Total de Juros:</label>
        <p>R$ {(monthlyPayment * (paymentDeadline ?? 0) - (loanValue ?? 0)).toFixed(2)}</p>
      </div>
    </>
  )
}

export default SimulationResult;
