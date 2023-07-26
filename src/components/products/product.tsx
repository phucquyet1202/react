import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { addProduct, getProduct, removeProduct, updateProduct } from '../../actions/product'


const Product = () => {
  const dispatch = useAppDispatch()
  const { products, isLoading, err } = useAppSelector((state: any) => state.products)
  console.log(products);
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  if (isLoading) return <div>Loading...</div>
  if (err) return <div>{err}</div>
  return (

    <div>
      <table>
        <button onClick={() => dispatch(addProduct({ name: "san pham moi them", price: 900 }))}>them</button>
        <tr>
          <td>stt</td>
          <td>ten sp</td>
          <td>gia</td>
          <td>hanh dong</td>
        </tr>
        {products?.map((item: any, index: number) => {
          return <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <button onClick={() => dispatch(removeProduct(item.id))}>xoa</button>
              <button onClick={() => dispatch(updateProduct({ id: item.id, name: "san pham update", price: 900 }))}>sua</button>
            </td>
          </tr>
        })}
      </table>

    </div>
  )
}

export default Product