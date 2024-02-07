import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'

interface ProductDataProps {
  title: string
  description: string
  thumbnail: ImageProps
}

type ProductProps = TouchableOpacityProps  & {
  data: ProductDataProps
}

const Product = ({data, ...rest}: ProductProps) => {
  return (
    <TouchableOpacity className='w-full flex-row items-center pb-4' {...rest}>
        <Image source={data.thumbnail} className='h-20 w-20 rounded-md ' />
        <View className='flex-1 ml-3'>
          <Text className='text-slate-100 font-subtitle text-base flex-1'>{data.title}</Text>
          <Text className='text-slate-400 text-xs leading-5 mt-0.5'>{data.description}</Text>
        </View>
    </TouchableOpacity>
  )
}

export {Product}
