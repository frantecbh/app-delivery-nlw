import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import clsx from 'clsx'

type CategoryProps = PressableProps & {
  title: string
  isSelected?: boolean
}

const CategoryButton = ({title, isSelected, ...rest}: CategoryProps) => {
  return (
    <Pressable {...rest} className={clsx('bg-slate-800 px-4 justify-center rounded-md h-10',
    isSelected && ('border-2 border-lime-300')
    )} >
      <Text className='text-slate-100 font-subtitle text-sm'>{title}</Text>
    </Pressable>
  )
}

export {CategoryButton}

