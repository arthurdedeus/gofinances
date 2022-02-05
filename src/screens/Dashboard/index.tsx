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
  } from './styles';
import { HighlightCard } from '../../components/HighlightCard';

export function Dashboard(){
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

      <HighlightCard />

    </Container>
  )
}
