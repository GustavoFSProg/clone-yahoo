import React from 'react'
import * as S from '../Header/styles'
import logo from '../../assets/yahoo.png'
import lupa from '../../assets/lupa-yahoo.jpg'
import { FiBell } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'

function Header() {
  return (
    <S.NavBar>
      <img src={logo} alt="logo" style={{ marginLeft: '97px' }} />
      <S.Input name="search" />
      <img src={lupa} alt="logo" style={{ width: '45px', height: '38px' }} />
      <S.Button>Entrar</S.Button>
      <S.Space /> <FiBell />
      <S.SpaceDois />
      <FiMail />
      <S.SpaceDois />
      <S.Text>
        Mail
      </S.Text>
    </S.NavBar>
  )
}

export default Header
