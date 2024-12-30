import './style.css'
import Loading from '../Loader/Loading';

import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom';
const Products = () => {
  const { data, isLoading, error } = useFetch('https://dummyjson.com/products')
  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}
      <div className=" container py-5">
        <h2 className='text-center py-4 fw-semibold '>Products</h2>
        <hr />
        <div className="row g-4 ">
          {data.products.map(product =>
            <div className="col-sm-4 mb-2 mb-sm-0 " key={product.id}>
              <div className="card h-100 shadow-sm">
                  <img src={product.thumbnail} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text  text-truncate text-secondary">{product.description}</p>
                  <Link className='btn mt-auto' to={`/products/${product.id}`}>details</Link>
                </div>
              </div>
            </div>
        )}
        </div>
      </div>
    </>
  )
}

export default Products