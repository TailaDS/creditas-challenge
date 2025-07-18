export function calculateAge(birthdate: Date) {
    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth();

    let age = date.getFullYear() - birthdate!.getFullYear();

    if (
      currentMonth < birthdate!.getMonth()
      || (currentMonth === birthdate?.getMonth() && today < birthdate?.getDate())
    ) {
      age--;
    }
    return age
  }

export function calculateInterestRate(age: number) {
    if (age <= 25) return 0.05;
    if (age >= 26 && age < 40) return 0.03;
    if (age >= 41 && age < 60) return 0.02;
    return 0.04;
  }

export function calculateMonthlyPayment(loan: number, annualRate: number, n: number): number {
    const r = annualRate / 12;
    const pmt = (loan * r) / (1 - Math.pow(1 + r, -n));
    return pmt;
  }