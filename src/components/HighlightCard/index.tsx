import React from 'react';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
 } from './styles';

export function HighlightCard(){
  return(
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$500.000,00</Amount>
        <LastTransaction>Última transação em 05/02/2022</LastTransaction>
      </Footer>
    </Container>
  )
}
