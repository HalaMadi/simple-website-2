import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Category from '../Category/Category';
import Loading from '../Loader/Loading';
import './style.css';
import Quotes from '../Quotes/Quotes';

const Home = () => {
  const { data, isLoading } = useFetch('https://dummyjson.com/products?limit=6');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div style={{ height: '450px' }} className="home d-flex flex-column align-items-center justify-content-center gap-2">
        <h1>Mini Store</h1>
        <p className="w-50 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque et modi unde nihil, eum esse sed maiores in amet aspernatur ullam! Incidunt excepturi quasi ducimus aut impedit odio. Eligendi, numquam?
        </p>
        <div className="btnGroup d-flex gap-2">
          <button className="shope btn btn-outline-none">Shop now</button>
          <button className="find btn btn-outline-secondary">Find more</button>
        </div>
      </div>
      <hr />
      
      {/* Product */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 text-end">
          {data.products.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="text-success fw-bold">${product.price}</p>
                  <Link className='btn mt-auto' to={`/products/${product.id}`}>details</Link>

                </div>
              </div>
            </div>
          ))}
        </div>
          <Link className='btn my-3' to={`/products`}>More Products</Link>
      </div>
      <Quotes />
    </>
  );
};

export default Home;
