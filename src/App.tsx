function App() {

  return (
    <>
      <div>
        <h1>Simule seu Empréstimo</h1>
        <form id="simulation-values">
          <label>Dados da Simulação</label><br /> <br />

          <label htmlFor="loan-value">Valor do Empréstimo</label><br/>
          <input type="number" id="loan-value" /><br/>

          <label htmlFor="payment-deadline">Prazo para Pagamento</label><br/>
          <input type="number" id="payment-deadline" /><br/>

          <label htmlFor="birthday">Data de Nascimento</label><br/>
          <input type="date" id="birthday" min="1910-01-01" max="2025-01-01"/><br /> <br />

          <button onClick={() => alert("Fazer cálculo com os dados do forms")}>Simular Empréstimo</button>
        </form>
      </div>
      <div>
        <p>Preencha os dados para visualizar o resultado da simulação</p>
        // TODO: remover tag e adicionar sessão de resultados
      </div>
    </>
  )
}

export default App
