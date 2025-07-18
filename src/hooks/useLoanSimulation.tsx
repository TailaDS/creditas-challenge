import { useState } from "react";
import { calculateAge, calculateInterestRate, calculateMonthlyPayment } from "../utils/calculate";

function useLoanSimulation () {
  const [ loanValue, setLoanValue ] = useState<number>(0);
  const [ paymentDeadline, setPaymentDeadline ] = useState<number>(0);
  const [ birthDate, setBirthDate ] = useState<Date>();
  const [ age, setAge ] = useState<number>();
  const [ interestRate, setInterestRate ] = useState<number>(0);
  const [ monthlyPayment, setMonthlyPayment ] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!loanValue || !paymentDeadline || !birthDate) {
      alert("Preencha os campos");
      return;
    }

    const age = calculateAge(birthDate);
    const rate = calculateInterestRate(age);
    const pmt = calculateMonthlyPayment(loanValue, rate, paymentDeadline);

    setAge(age);
    setInterestRate(rate);
    setMonthlyPayment(pmt);
  }

  return {
    loanValue,
    paymentDeadline,
    birthDate,
    age,
    interestRate,
    monthlyPayment,
    setLoanValue,
    setPaymentDeadline,
    setBirthDate,
    handleSubmit,
  }
}

export default useLoanSimulation;
