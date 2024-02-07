import { Text, View } from 'react-native'
import React from 'react'
import { Header } from '@/components/header'



type Props = {}

const Home = (props: Props) => {
  return (
    <View className="flex-1 pt-8">
      <Header title='Faça seu pedido' cartQuantityItens={5}  />
    </View>
  )
}

export default Home

