import { ActivityIndicator,  View } from 'react-native'
import React from 'react'

import colors from 'tailwindcss/colors'

 const Loading = () => {
  return (
    <View className='flex-1 items-center justify-center bg-slate-900'>
      <ActivityIndicator color={colors.white} size='large' />
    </View>
  )
}

export {Loading}

