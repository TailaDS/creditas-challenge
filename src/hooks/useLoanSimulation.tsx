import { useState } from "react";
import { calculateAge, calculateInterestRate, calculateMonthlyPayment } from "../utils/calculate";

function useLoanSimulation () {
  const [ loanValue, setLoanValue ] = useState<string>("");
  const [ paymentDeadline, setPaymentDeadline ] = useState<string>("");
  const [ birthdate, setBirthdate ] = useState<Date>();
  const [ age, setAge ] = useState<number>();
  const [ interestRate, setInterestRate ] = useState<number>(0);
  const [ monthlyPayment, setMonthlyPayment ] = useState<number>(0);
  const [ isCalculated, setIsCalculated ] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!loanValue || !paymentDeadline || !birthdate) {
      alert("Preencha os campos");
      return;
    }
    const loanValueNumber = Number(loanValue.replace(/\D/g, ""))
    const paymentDeadlineNumber = Number(paymentDeadline.replace(/\D/g, ""))

    const age = calculateAge(birthdate);
    const rate = calculateInterestRate(age);
    const pmt = calculateMonthlyPayment(loanValueNumber, rate, paymentDeadlineNumber);

    setAge(age);
    setInterestRate(rate);
    setMonthlyPayment(pmt);
    setIsCalculated(true);
  }

  return {
    loanValue,
    paymentDeadline,
    birthdate,
    age,
    interestRate,
    monthlyPayment,
    isCalculated,
    setLoanValue,
    setPaymentDeadline,
    setBirthdate,
    handleSubmit,
    setIsCalculated
  }
}

export default useLoanSimulation;
