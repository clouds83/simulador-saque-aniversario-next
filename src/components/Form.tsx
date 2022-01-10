import React from 'react'

const Form: React.FC = () => {
  return (
    <main className="container">
      <div className="content">
        <form>
          <div className="flex-row">
            <div className="flex-column">
              <label htmlFor="aniversarioData">Data do seu aniversário*</label>
              <input
                type="date"
                id="aniversarioData"
                name="aniversarioData"
              ></input>
            </div>
            <div className="flex-column"></div>
          </div>
          <div className="flex-row">
            <div className="flex-column">
              <label htmlFor="saldoFgts">Saldo atual do seu FGTS*</label>
              <input type="number" id="saldoFgts" name="saldoFgts"></input>
            </div>
            <div className="flex-column">
              <label htmlFor="depositoMensal">
                Valor depositado mensalmente
              </label>
              <input
                type="number"
                id="depositoMensal"
                name="depositoMensal"
              ></input>
            </div>
          </div>
          <button type="submit">Calcular</button>
          <p className="txt-center">
            Valores referentes aos juros mensais já inclusos.
          </p>
          <p className="txt-center">*Campos obrigatórios</p>
        </form>
      </div>
    </main>
  )
}

export default Form
