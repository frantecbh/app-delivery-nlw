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