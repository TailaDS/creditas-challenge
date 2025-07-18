import React from "react";
import { Input, Label, SimulationForm, SubimitButton, Subtitle } from "../styles/styles";

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
    <SimulationForm onSubmit={handleSubmit}>
      <Subtitle>Dados da Simulação</Subtitle>
      <div>
        <Label htmlFor="loan-value">Valor do Empréstimo</Label>
        <Input
          id="loan-value"
          min="0"
          type="number"
          onChange={(e) => handleLoanChange(e.target.value)}
          value={loanValue}
          required
        />
      </div>

      <div>
        <Label htmlFor="payment-deadline">Prazo para Pagamento</Label>
        <Input
          type="number"
          id="payment-deadline"
          min="0"
          value={paymentDeadline}
          onChange={(event) => handlePaymentChange(event.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="birthday">Data de Nascimento</Label>
          <Input
            type="date"
            id="birthday"
            min="1910-01-01"
            max="2025-01-01"
            onChange={(e) => handleBirthdateChange(e.target.value)}
            required
          />
      </div>

      <SubimitButton type="submit">Simular Empréstimo</SubimitButton>
    </SimulationForm>
  )
}

export default SimulationValues;
