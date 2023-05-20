import { filterItems } from '../../utils/filterItems'
import { Product } from '../Product/Product'

export const ProductList = ({ query, dataset }) => {
    const items = filterItems(query, dataset)
  return (
    <div>
        {items?.map(({ id, title })=>(
            <Product key={id} title ={title}/>
        ))}
    </div>
  )
}
