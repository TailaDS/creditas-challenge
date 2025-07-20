import React from "react";
import {
  Input,
  Label,
  SimulationForm,
  SubimitButton,
  Subtitle
} from "../styles/styles";

interface Props {
  loanValue: string;
  paymentDeadline: string;
  setLoanValue: (value: string) => void;
  setPaymentDeadline: (value: string) => void;
  setBirthdate: (date: Date) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

function SimulationValues({
  loanValue,
  paymentDeadline,
  setLoanValue,
  setPaymentDeadline,
  setBirthdate,
  handleSubmit
}: Props) {
  const handleLoanChange = (value: string) => {
    setLoanValue(value);
  }

  const handlePaymentChange = (value: string) => {
    setPaymentDeadline(value);
  }

  const handleBirthdateChange = (value: string) => {
    const [year, month, day] = value.split('-').map(Number);
    const date: Date = new Date(year, month -1, day)
    setBirthdate(date);
  }

  return (
    <SimulationForm onSubmit={handleSubmit}>
      <Subtitle>Dados da Simulação</Subtitle>
      <div>
        <Label htmlFor="loan-value">Valor do Empréstimo</Label>
        <Input
          id="loan-value"
          data-testid="loan-value-input"
          type="number"
          min="0"
          placeholder="Ex.: 1000"
          value={loanValue}
          onChange={(e) => handleLoanChange(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="payment-deadline">Prazo para Pagamento</Label>
        <Input
          id="payment-deadline"
          data-testid="payment-deadline-input"
          type="number"
          min="0"
          placeholder="Ex.: 12"
          value={paymentDeadline}
          onChange={(event) => handlePaymentChange(event.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="birthdate">Data de Nascimento</Label>
          <Input
            id="birthdate"
            data-testid="birthdate-input"
            type="date"
            min="1910-01-01"
            max="2025-01-01"
            placeholder="dd/mm/aaaa"
            onChange={(e) => handleBirthdateChange(e.target.value)}
            required
          />
      </div>

      <SubimitButton type="submit">Simular Empréstimo</SubimitButton>
    </SimulationForm>
  )
}

export default SimulationValues;
