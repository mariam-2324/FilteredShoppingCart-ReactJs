import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";



// https://dummyjson.com/products
const ProductsDetail = () => {
  const [product, setProductsDetail] = useState();
  const {id} = useParams()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(`https://dummyjson.com/products/${id}`)
        console.log(data);
        setProductsDetail(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [id]) 

  return (
    <>
    <div className="container mt-10">
      <div className="row max-w-fit px-70 bg-mist-200">
        <img src={product?.images[0]} alt="" className="max-h-90"/>
        <h3>{product?.title}</h3>
        <p className="text-sm text-gray-700 mt-1 line-clamp-2">{product?.description}</p> 
        <span className="text-xl font-bold text-teal-600">${product?.price}</span>
        <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md flex items-center gap-1">
          <span>⭐</span> {product?.rating}
        </span>
      </div>
    </div>
    </>
  )
}

export default ProductsDetail