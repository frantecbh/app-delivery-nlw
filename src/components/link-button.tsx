import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, LinkProps } from 'expo-router'

type LinkButtonProps = LinkProps<string> &{
  title: string
}

const LinkButton = ({title, ...rest}: LinkButtonProps) => {
  return (
   <Link className='text-slate-300 text-center text-base font-body pt-1' {...rest}>
    {title}
   </Link>
  )
}

export {LinkButton}

