import React from 'react'
import fgtsLogo from '../assets/fgts-logo.svg'

const Header: React.FC = () => {
  return (
    <>
      <header>
        <div className="content">
          <h1>
            Simular próximo
            <br />
            Saque-Aniversário
          </h1>
          <img
            src={fgtsLogo}
            alt="FGTS - Fundo de Garantia do Tempo e Serviço"
          />
        </div>
      </header>
    </>
  )
}

export default Header
