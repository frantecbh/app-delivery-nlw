import { FlatList, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Header } from '@/components/header'
import { CategoryButton } from '@/components/category-button'
import { CATEGORIES } from '@/utils/data/products'


const Home = () => {

  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelect(selectedCategory: string){
    setCategory(selectedCategory)
  }

  return (
    <View className="flex-1 pt-8">
      <Header title='Faça seu pedido' cartQuantityItens={5}  />
     
     
      <FlatList data={CATEGORIES} 
      keyExtractor={(item) => item}
      renderItem={({item}) => (
        <CategoryButton title={item} isSelected={item === category} onPress={() => handleCategorySelect(item)}/>
      )}
      horizontal
      className='max-h-10 mt-5'
      contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
      showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}

export default Home

