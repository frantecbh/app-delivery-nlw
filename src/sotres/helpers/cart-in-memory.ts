import { ProductProps } from "@/utils/data/products";
import { ProductCardProps } from "../cart-store";

export function add(products: ProductCardProps[], newProduct: ProductProps){

  const existngProduct = products.find(({id}) => newProduct.id === id)

  if(existngProduct){
    return products.map((product) => 
    product.id === existngProduct.id ?
    {...product, quantity: product.quantity + 1} :
    product
    )
  }

  return [...products, {...newProduct, quantity: 1}]

}

export function remove(products: ProductCardProps[], productRemoveID: string) {
  const updatedProducts = products.map((product) => product.id === productRemoveID ? {
    ...product,
    quantity: product.quantity > 1 ? product.quantity - 1 : 0
  }: product)
  
  return updatedProducts.filter((product) => product.quantity > 0)
  
}