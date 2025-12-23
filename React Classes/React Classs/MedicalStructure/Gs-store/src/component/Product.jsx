import React from 'react'
import { useGetAllProductsQuery } from '../apis/productApis'
import style from './product.module.css'

const Products = () => {

    const   data = useGetAllProductsQuery();

    console.log(data.data)

    return (
        <div className= {style.productContainer}>
            {
                data?.data?.map((product) =>(
                    <div key={product.id}>
                        <img src={`${product.image}`} alt=""/>
                        <h1>{product.title}</h1>
                        <h2>{product.category}</h2>
                        <p>{product.price}</p>
                    </div>
                ))
                
            }
        </div>
        )

}
export default Products