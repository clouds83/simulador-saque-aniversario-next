import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import Link from 'next/link'

const Form: React.FC = () => {

  const birthMonthList = [
    {
      label: "Janeiro",
      value: 1,
    },
    {
      label: "Fevereiro",
      value: 2,
    },
    {
      label: "Março",
      value: 3,
    },
    {
      label: "Abril",
      value: 4,
    },
    {
      label: "Maio",
      value: 5,
    },
    {
      label: "Junho",
      value: 6,
    },
    {
      label: "Julho",
      value: 7,
    },
    {
      label: "Agosto",
      value: 8,
    },
    {
      label: "Setembro",
      value: 9,
    },
    {
      label: "Outubro",
      value: 10,
    },
    {
      label: "Novembro",
      value: 11,
    },
    {
      label: "Dezembro",
      value: 12,
    },
  ]

  const { birthMonth, balance, installment, setBirthMonth, setBalance, setInstallment } = useData();

  return (
    <main className="container">

      <div className="content">


        <div className="flex-row">

          <div className="flex-column">

            <label htmlFor="aniversarioData">Mês de seu aniversário *</label>
            <select
              id="aniversarioData"
              name="aniversarioData"
              value={birthMonth}
              onChange={(e) => {
                const selectedMonth = e.target.value
                setBirthMonth(selectedMonth)
              }}
              required>
              {birthMonthList.map((month) => (
                <option key={month.value} value={month.value}>{month.label}</option>
              ))}
            </select>

          </div>

        </div>

        <div className="flex-row">

          <div className="flex-column">

            <label htmlFor="saldoFgts">Saldo atual do seu FGTS *</label>

            <input
              type="number"
              id="saldoFgts"
              name="saldoFgts"
              value={balance}
              onChange={e => setBalance(e.target.value)}
              required
            />

          </div>

          <div className="flex-column">

            <label htmlFor="depositoMensal">
              Valor depositado mensalmente
            </label>
            <input
              type="number"
              id="depositoMensal"
              name="depositoMensal"
              value={installment}
              // placeholder='0'
              onChange={event => setInstallment(event.target.value)}
            />

          </div>

        </div>

        <Link href="/resultados">
          <a className="button mb1">Calcular</a>
        </Link>

        <p className="txt-center">
          Valores referentes aos juros mensais já inclusos.
        </p>

        <p className="txt-center">* Campos obrigatórios</p>


      </div>

    </main>
  )
}

export default Form
