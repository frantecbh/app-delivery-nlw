import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import {Feather} from '@expo/vector-icons'

import colors from 'tailwindcss/colors'

import imagHeader from '../assets/logo.png'

type HeaderProps = {
  title: string
  cartQuantityItens?: number
}

const Header = ({title, cartQuantityItens}: HeaderProps) => {
  return (
    <View className='flex-row items-center border-b border-slate-700 pb-5 mx-5'>
     <View className='flex-1'>
      <Image source={imagHeader} className='h-6 w-32' />
      <Text className='text-white text-xl font-heading pt-2'>{title}</Text>
     </View>

     {
      cartQuantityItens && (
        <TouchableOpacity className='relative' activeOpacity={0.7}>
        <View className='bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 -right-3.5 z-10'>
           <Text className='text-slate-900 font-bold text-xs'>{cartQuantityItens}</Text>
        </View>
        <Feather name='shopping-bag' color={colors.white} size={24} />
        </TouchableOpacity>
      )
     }
    
   
    </View>
  )
}

export {Header}