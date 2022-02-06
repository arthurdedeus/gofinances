import React from 'react';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  Transactions,
  Title,
  TransactionList,
  } from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { HighlightCards } from '../../components/HighlightCard/styles';
import { TransactionCard } from '../../components/TransactionCard';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export function Dashboard(){
  const data = [
    {
    title: "Entrada",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "14/03/2022",
  },
  {
    title: "Entrada",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "14/03/2022",
  },
]
  return(
    <Container>

      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/54866778?v=4'}}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Arthur</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
        title="Entradas"
        amount="R$ 17.400,00"
        lastTransaction="Última entrada dia 02 de fevereiro"
        type="up"
        />
        <HighlightCard
        title="Saídas"
        amount="R$ 1.259,00"
        lastTransaction="Última entrada dia 1 de fevereiro"
        type="down"
        />
        <HighlightCard
        title="Total"
        amount="R$ 16.141,00"
        lastTransaction="01 à 05 de fevereiro"
        type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />

      </Transactions>

    </Container>
  )
}
