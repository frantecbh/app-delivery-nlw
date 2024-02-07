import { FlatList, SectionList, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Header } from '@/components/header'
import { CategoryButton } from '@/components/category-button'
import { CATEGORIES, MENU} from '@/utils/data/products'
import { Product } from '@/components/product'
import { Link } from 'expo-router'


const Home = () => {

  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList>(null)

  function handleCategorySelect(selectedCategory: string){
    setCategory(selectedCategory)

    // scroll section list
    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)
    if(sectionListRef.current){
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0
      })
    }

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

<SectionList 
  ref={sectionListRef}
  sections={MENU}
  keyExtractor={(item) => item.id}
  stickySectionHeadersEnabled={false}
  renderItem={({item}) => (
    <Link href={`/product/${item.id}`} asChild>
    <Product data={item} />
    </Link>
    
  )}
  renderSectionHeader={({section: {title}}) => (
    <Text className='text-white text-xl font-heading mt-8 mb-3'>{title}</Text>
  )}
  showsVerticalScrollIndicator={false}
  className='p-5 flex-1'
  contentContainerStyle={{paddingBottom: 100}}
/>
      

    </View>
  )
}

export default Home

