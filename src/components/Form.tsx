import React, { useState } from 'react'
import { useData } from '../context/DataContext'

const Form: React.FC = () => {

  const birthMonthList = [
    {
      label: "Janeiro",
      value: "1",
    },
    {
      label: "Fevereiro",
      value: "2",
    },
    {
      label: "Março",
      value: "3",
    },
    {
      label: "Abril",
      value: "4",
    },
    {
      label: "Maio",
      value: "5",
    },
    {
      label: "Junho",
      value: "6",
    },
    {
      label: "Julho",
      value: "7",
    },
    {
      label: "Agosto",
      value: "8",
    },
    {
      label: "Setembro",
      value: "9",
    },
    {
      label: "Outubro",
      value: "10",
    },
    {
      label: "Novembro",
      value: "11",
    },
    {
      label: "Dezembro",
      value: "12",
    },
  ]

  const { birthMonth, saldo, parcela, setBirthMonth, setSaldo, setParcela } = useData();

  return (
    <main className="container">
      <div className="content">
        <form>
          <div className="flex-row">
            <div className="flex-column">

              <label htmlFor="aniversarioData">Mês de seu aniversário*</label>

              <select
                id="aniversarioData"
                name="aniversarioData"
                value={birthMonth}
                onChange={(e) => {
                  const selectedMonth = e.target.value
                  setBirthMonth(selectedMonth)
                }}>
                {birthMonthList.map((month) => (
                  <option value={month.value}>{month.label}</option>
                ))}
              </select>

              {birthMonth}

            </div>
            <div className="flex-column"></div>
          </div>
          <div className="flex-row">
            <div className="flex-column">

              <label htmlFor="saldoFgts">Saldo atual do seu FGTS*</label>

              <input
                type="number"
                id="saldoFgts"
                name="saldoFgts"
                value={saldo}
                onChange={event => setSaldo(event.target.value)}
              />

              {saldo}

            </div>
            <div className="flex-column">

              <label htmlFor="depositoMensal">
                Valor depositado mensalmente
              </label>

              <input
                type="number"
                id="depositoMensal"
                name="depositoMensal"
                value={parcela}
                onChange={event => setParcela(event.target.value)}
              />

              {parcela}

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
