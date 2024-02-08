import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '@/components/header'
import { userCardStore } from '@/sotres/cart-store'
import { Product } from '@/components/product'
import { formatCurrency } from '@/utils/functions/format-currency'
import { Input } from '@/components/input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from '@/components/button'
import { Feather } from '@expo/vector-icons'
import { LinkButton } from '@/components/link-button'

type Props = {}

const Cart = (props: Props) => {
  const cartStore = userCardStore()

  const total = formatCurrency(cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0))

  return (
    <View className='flex-1 pt-8'>
     <Header title='Seu carrinho' />
     <KeyboardAwareScrollView
      showsHorizontalScrollIndicator={false}
      extraHeight={100}
     >
<ScrollView>
<View className='p-5 flex-1'>
    {cartStore.products.length > 0 ? (  <View className='border-b border-slate-700'>

      {
        cartStore.products.map((product, i) =>(
          <Product key={i} data={product} />

        ))
      }     
      </View>): 
      
      (<Text className='font-body text-slate-400 text-center my-8'>Seu carrinho esta vazio</Text>)}



        <View className='flex-row gap-2  items-center  mt-5 mb-4'>
        
            <Text className='text-white text-xl font-subtitle'>Total: </Text>
            <Text className='text-lime-400 text-2xl font-heading'>
             {total}
            </Text>
        </View>
        <Input placeholder='Informe seu endereço de entrega ' />
        </View>
        </ScrollView>
        </KeyboardAwareScrollView>
        <View className='p-5 gap-5'>
          <Button>
            <Button.Text>Enviar Pedido</Button.Text>
            <Button.Icon>
              <Feather name='arrow-right-circle' size={20} />
            </Button.Icon>
          </Button>
          <LinkButton title='Voltar ao cardápio' href='/'/>
        </View>
    </View>
  )
}

export default Cart

