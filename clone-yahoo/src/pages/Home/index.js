import React from 'react'
import Header from '../../components/Header'
import * as S from './style'

function Home() {
  return (
    <S.Container>
      <Header />
      <S.Columns>
        <S.ColumnsInside>
          <S.Main></S.Main>
          <S.Main style={{ background: 'gray' }}></S.Main>
        </S.ColumnsInside>
        <S.ColumnsInsideTwo></S.ColumnsInsideTwo>
      </S.Columns>
    </S.Container>
  )
}

export default Home
