import React from "react";

interface Props {
  loanValue: number;
  paymentDeadline: number;
  setLoanValue: (value: number) => void;
  setPaymentDeadline: (value: number) => void;
  setBirthDate: (date: Date) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

function SimulationValues({
  loanValue,
  paymentDeadline,
  setLoanValue,
  setPaymentDeadline,
  setBirthDate,
  handleSubmit

}: Props) {
  const handleLoanChange = (value: string) => {
    const numbers = parseFloat(value.replace(/[^\d,]/g, ''));
    setLoanValue(numbers);
  }

  const handlePaymentChange = (value: string) => {
    const numbers = parseInt(value.replace(/[^\d,]/g, ''));
    setPaymentDeadline(numbers);
  }

  const handleBirthdateChange = (value: string) => {
    const [year, month, day] = value.split('-').map(Number);
    const date: Date = new Date(year, month -1, day)
    setBirthDate(date);
  }

  return (
    <form id="simulation-values" onSubmit={handleSubmit}>
      <label>Dados da Simulação</label>
      <div>
        <label htmlFor="loan-value">Valor do Empréstimo</label><br/>
        <input
          id="loan-value"
          min="0"
          type="number"
          onChange={(e) => handleLoanChange(e.target.value)}
          value={loanValue}
          required
        />
      </div>

      <div>
        <label htmlFor="payment-deadline">Prazo para Pagamento</label><br/>
        <input
          type="number"
          id="payment-deadline"
          min="0"
          value={paymentDeadline}
          onChange={(event) => handlePaymentChange(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="birthday">Data de Nascimento</label><br/>
          <input
            type="date"
            id="birthday"
            min="1910-01-01"
            max="2025-01-01"
            onChange={(e) => handleBirthdateChange(e.target.value)}
            required
          />
      </div>

      <button type="submit">Simular Empréstimo</button>
    </form>
  )
}

export default SimulationValues;
