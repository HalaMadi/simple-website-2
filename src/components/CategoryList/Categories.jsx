import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loader/Loading";

const Categories = () => {
  const { name } = useParams();
  const { data, isLoading, error } = useFetch(`https://dummyjson.com/products/category/${name}`);
  console.log(data)

  if (error) {
    return <div className="alert alert-danger">Product not found</div>;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container py-5 " >
      <h2 className="text-center py-4 fw-semibold text-uppercase">{name}</h2>
      <div className="row g-4">
        {data.products.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <div className="card h-100 shadow-sm ">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={`Thumbnail of ${product.title}`}
              />
              <div className="card-body d-flex flex-column align-items-center justify-content-center ">
              <h6 className="card-title fs-6  text-capitalize text-center">{product.title}</h6>
                <p className="text-success fw-bold">${product.price}</p>
                <span
                  className="badge"
                  style={{
                    color: "#3D5361",
                  }}
                >
                  Rating: {product.rating}
                </span>
                <Link className='btn mt-auto' to={`/products/${product.id}`}>details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
