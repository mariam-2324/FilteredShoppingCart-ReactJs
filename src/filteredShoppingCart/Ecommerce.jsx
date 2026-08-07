import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { productCategories } from './Category'

const Ecommerce = () => {

  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(3000);

  
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const {data} = await axios.get("https://dummyjson.com/products")
        setProducts(data.products)
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts()
  }, [])

  useEffect(() => {
    let result = products;

    if (search !== "") {
      const normalizedSearch = search.toLowerCase().trim();
      result = result.filter((product) => product.title.toLowerCase().includes(normalizedSearch));
    }

    if(category !== "all"){
      result = result.filter(products => products.category === category)
    }

    result = result.filter(products => products.price <= price)

    setFilteredProducts(result);
  }, [products, search, category, price])

return (
    <>
        <div className='text-4xl font-bold text-teal-600 text-center my-6'>
          <h1>Products</h1>
        </div>

        <div className="container mx-auto px-4">
          <div className="filters">
            <div className="row p-10 flex items-center justify-between">
              <div className="col-lg-4 col-md-6 col-12 border-2 border-teal-500 rounded-md">
                <input type="search" placeholder="Search here..." className="w-80"  value={search} onChange={(e) => setSearch(e.target.value)}/>
              </div>
              <div className="col-lg-4 col-md-6 col-12 border-2 border-teal-500 rounded-md">
                <select name="" id="" value={category} onChange={(e) => setCategory(e.target.value)} className="w-60 border-none">
                  {
                    productCategories.map((category) => (
                      <option value={category}>{category}</option>
                    ))
                  }
                </select>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <label htmlFor="" className="price-label w-20 pl-5">${price}</label>
                <input type="range" min = "0" max = "3000" className='w-20' value={price} onChange={(e) => setPrice(e.target.value)}  className="price-bar"/>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
              filteredproducts.map((product) => (
                <div key={product?.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                  <Link to={`/ecommerce/${product.id}`} className="block no-underline no-underline-all">
                    <div className="h-48 overflow-hidden bg-gray-100">
                      <img src={product?.thumbnail} alt={product?.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-gray-800 truncate">{product?.title}</h2>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product?.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xl font-bold text-teal-600">${product?.price}</span>
                        <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md flex items-center gap-1">
                          <span>⭐</span> {product?.rating}
                        </span>
                      </div>

                      <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium cursor-pointer">
                        Add to Cart
                      </button>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>

        </div>
    </>
  )
}

export default Ecommerce




// const filteredproducts = useMemo(() => {
    // const normalizedSearch = search.toLowerCase().trim();
    // if (!normalizedSearch) return products;

    // return products.filter((product) =>
    //   product.title.toLowerCase().includes(normalizedSearch)
    // );