import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Header } from '@/components/header'
import { ProductCardProps, userCardStore } from '@/sotres/cart-store'
import { Product } from '@/components/product'
import { formatCurrency } from '@/utils/functions/format-currency'
import { Input } from '@/components/input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from '@/components/button'
import { Feather } from '@expo/vector-icons'
import { LinkButton } from '@/components/link-button'



const Cart = () => {
  const cartStore = userCardStore()

  const [address, setAddress] = useState('')

  const total = formatCurrency(cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0))

  const handleProductRemove = (product: ProductCardProps) => {
       Alert.alert("Remover Item", `Deseja remover ${product.title} do carrinho` , [
        {
          text: "Cancelar"
        },
        {
          text: "Remover",
          onPress: () => cartStore.remove(product.id)
        }

       ]) 
  }

  const handleOrder = () => {
   if(address.trim().length === 0){
    return Alert.alert('Pedido', "informe os dados da entrega")
   }

   const products = cartStore.products.map((product) => `\n ${product.quantity} ${product.title}`)
   .join("")

  const message = `
  🍔 NOVO PEDIDO 🍔
  \n Entregar em: ${address}
  ${products}
  \n
  ${total}  
  ` 

  console.log(message)
  }

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
          <Product key={i} data={product} onPress={() => handleProductRemove(product)} />

        ))
      }     
      </View>): 
      
      (<Text className='font-body text-slate-400 text-center my-8'>Seu carrinho esta vazio</Text>)}



        {cartStore.products.length > 0 && (
          <>
          
        <View className='flex-row gap-2  items-center  mt-5 mb-4'>
        
        <Text className='text-white text-xl font-subtitle'>Total: </Text>
        <Text className='text-lime-400 text-2xl font-heading'>
         {total}
        </Text>
    </View>
    <Input placeholder='Informe seu endereço de entrega' onChangeText={setAddress} />
          </> 
        )  }
        
        </View>
        </ScrollView>
        </KeyboardAwareScrollView>
        {cartStore.products.length > 0 && (
          <>
                <View className='p-5 gap-5'>
          <Button onPress={handleOrder}>
            <Button.Text>Enviar Pedido</Button.Text>
            <Button.Icon>
              <Feather name='arrow-right-circle' size={20} />
            </Button.Icon>
          </Button>
          <LinkButton title='Voltar ao cardápio' href='/'/>
        </View>
            </> 
          )}
  
    </View>
  )
}

export default Cart

