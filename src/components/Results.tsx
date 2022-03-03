import Link from 'next/link'
import React from 'react'
import { useData } from '../context/DataContext'

const Results: React.FC = () => {
  let { birthMonth, balance, installment } = useData();
  const currentMonth = (new Date().getMonth()) + +1;

  const monthsWithdraw = () => {
    if (currentMonth > birthMonth) {
      return 12 - +currentMonth + +birthMonth
    } else {
      return +birthMonth - +currentMonth
    }
  }

  const interest = 0.25 / 100

  //essa conta ta errada, se installment for 0, nao calcula os juros
  const futureBalance = ((installment * ((1 + interest) ** monthsWithdraw() - +1)) / interest) + +balance
  const futureBalance2 = ((installment * ((1 + interest) ** (monthsWithdraw() + +1) - 1)) / interest) + +balance
  const futureBalance3 = ((installment * ((1 + interest) ** (monthsWithdraw() + +2) - 1)) / interest) + +balance

  const withdrawAmount = () => {
    if (futureBalance < 500) {
      return futureBalance / 2
    } if (futureBalance > 500 && futureBalance <= 1000) {
      return futureBalance * 0.4 + +50
    } if (futureBalance > 1000 && futureBalance <= 5000) {
      return futureBalance * 0.3 + +150
    } if (futureBalance > 5000 && futureBalance <= 10000) {
      return futureBalance * 0.2 + +650
    } if (futureBalance > 10000 && futureBalance <= 15000) {
      return futureBalance * 0.15 + +1150
    } if (futureBalance > 15000 && futureBalance <= 20000) {
      return futureBalance * 0.1 + +1900
    } else {
      return futureBalance * 0.05 + +2900
    }
  }

  const withdrawAmount2 = () => {
    if (futureBalance2 < 500) {
      return futureBalance2 / 2
    } if (futureBalance2 > 500 && futureBalance2 <= 1000) {
      return futureBalance2 * 0.4 + 50
    } if (futureBalance2 > 1000 && futureBalance2 <= 5000) {
      return futureBalance2 * 0.3 + 150
    } if (futureBalance2 > 5000 && futureBalance2 <= 10000) {
      return futureBalance2 * 0.2 + 650
    } if (futureBalance2 > 10000 && futureBalance2 <= 15000) {
      return futureBalance2 * 0.15 + 1150
    } if (futureBalance2 > 15000 && futureBalance2 <= 20000) {
      return futureBalance2 * 0.1 + 1900
    } else {
      return futureBalance2 * 0.05 + 2900
    }
  }

  const withdrawAmount3 = () => {
    if (futureBalance3 < 500) {
      return futureBalance3 / 2
    } if (futureBalance3 > 500 && futureBalance3 <= 1000) {
      return futureBalance3 * 0.4 + 50
    } if (futureBalance3 > 1000 && futureBalance3 <= 5000) {
      return futureBalance3 * 0.3 + 150
    } if (futureBalance3 > 5000 && futureBalance3 <= 10000) {
      return futureBalance3 * 0.2 + 650
    } if (futureBalance3 > 10000 && futureBalance3 <= 15000) {
      return futureBalance3 * 0.15 + 1150
    } if (futureBalance3 > 15000 && futureBalance3 <= 20000) {
      return futureBalance3 * 0.1 + 1900
    } else {
      return futureBalance3 * 0.05 + 2900
    }
  }

  const birthMonthLong = () => {
    if (birthMonth == 1) {
      return 'Janeiro'
    } if (birthMonth == 2) {
      return 'Fevereiro'
    } if (birthMonth == 3) {
      return 'Março'
    } if (birthMonth == 4) {
      return 'Abril'
    } if (birthMonth == 5) {
      return 'Maio'
    } if (birthMonth == 6) {
      return 'Junho'
    } if (birthMonth == 7) {
      return 'Julho'
    } if (birthMonth == 8) {
      return 'Agosto'
    } if (birthMonth == 9) {
      return 'Setembro'
    } if (birthMonth == 10) {
      return 'Outubro'
    } if (birthMonth == 11) {
      return 'Novembro'
    } if (birthMonth == 12) {
      return 'Dezembro'
    }
  }

  const birthMonthLong2 = () => {
    if (birthMonth == 1) {
      return 'Fevereiro'
    } if (birthMonth == 2) {
      return 'Março'
    } if (birthMonth == 3) {
      return 'Abril'
    } if (birthMonth == 4) {
      return 'Maio'
    } if (birthMonth == 5) {
      return 'Junho'
    } if (birthMonth == 6) {
      return 'Julho'
    } if (birthMonth == 7) {
      return 'Agosto'
    } if (birthMonth == 8) {
      return 'Setembro'
    } if (birthMonth == 9) {
      return 'Outubro'
    } if (birthMonth == 10) {
      return 'Novembro'
    } if (birthMonth == 11) {
      return 'Dezembro'
    } if (birthMonth == 12) {
      return 'Janeiro'
    }
  }

  const birthMonthLong3 = () => {
    if (birthMonth == 1) {
      return 'Março'
    } if (birthMonth == 2) {
      return 'Abril'
    } if (birthMonth == 3) {
      return 'Maio'
    } if (birthMonth == 4) {
      return 'Junho'
    } if (birthMonth == 5) {
      return 'Julho'
    } if (birthMonth == 6) {
      return 'Agosto'
    } if (birthMonth == 7) {
      return 'Setembro'
    } if (birthMonth == 8) {
      return 'Outubro'
    } if (birthMonth == 9) {
      return 'Novembro'
    } if (birthMonth == 10) {
      return 'Dezembro'
    } if (birthMonth == 11) {
      return 'Janeiro'
    } if (birthMonth == 12) {
      return 'Fevereiro'
    }
  }

  return (
    <main className="container">

      <div className="content">

        <div className="table-row big-mb">

          <div className="table-cell table-title">

            <h2><span>Seu próximo Saque-Aniversário</span> será de:</h2>
            <p>
              Valores consideram o depósito mensal de seu empregador efetuado no
              mês do saque. Todos os valores são aproximados e não devem ser
              considerados para tomadas de decisão.
            </p>

          </div>

          <div className="table-cell table-results">

            <div className="flex-row">

              <div className="results-line">
                <span>{withdrawAmount().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>&nbsp;se sacado em&nbsp;
                <strong>{birthMonthLong()}</strong>
              </div>

            </div>

            <div className="flex-row middle-result">

              <div className="results-line">
                <span>{withdrawAmount2().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>&nbsp;se sacado em&nbsp;
                <strong>{birthMonthLong2()}</strong>
              </div>

            </div>

            <div className="flex-row">

              <div className="results-line">
                <span>{withdrawAmount3().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>&nbsp;se sacado em&nbsp;
                <strong>{birthMonthLong3()}</strong>
              </div>

            </div>

          </div>

        </div>

        <div className="flex-column fgts-after">

          <h3><span>Seu saldo do FGTS após saque</span> será de:</h3>
          <p>
            <strong>{(futureBalance - withdrawAmount()).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong> em Agosto, <strong>{(futureBalance2 - withdrawAmount2()).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong> em Setembro e <strong>{(futureBalance3 - withdrawAmount3()).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong> em Outubro
          </p>

        </div>

        <Link href="/">
          <a className="button">Calcular novamente</a>
        </Link>

      </div>
    </main>
  )
}

export default Results
