import React from 'react'

const Results: React.FC = () => {
  return (
    <main className="container">
      <div className="content">
        <div className="flex-row big-mb">
          <div className="flex-column table-title">
            <h2>Seu próximo Saque-Aniversário será de:</h2>
            <p>
              Valores consideram o depósito mensal de seu empregador efetuado no
              mês do saque. Todos os valores são aproximados e não devem ser
              considerados para tomadas de decisão.
            </p>
          </div>
          <div className="flex-column table-results">
            <div className="flex-row">
              <p>
                <span>R$ 1.000,00</span>&nbsp;se sacado em&nbsp;
                <strong>Agosto de 2022</strong>.
              </p>
            </div>
            <div className="flex-row middle-result">
              <p>
                <span>R$ 10.000,00</span>&nbsp;se sacado em&nbsp;
                <strong>Agosto de 2022</strong>.
              </p>
            </div>
            <div className="flex-row">
              <p>
                <span>R$ 100.000,00</span>&nbsp;se sacado em&nbsp;
                <strong>Agosto de 2022</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-column fgts-after">
          <h3>Seu saldo do FGTS após saque será de:</h3>
          <p>
            <strong>R$ 8.000,00</strong> em Agosto,<strong>R$ 8.200,00</strong>{' '}
            em Setembro e <strong>R$ 8.400,00</strong> em Outubro.
          </p>
        </div>
        <button>Calcular novamente</button>
      </div>
    </main>
  )
}

export default Results
